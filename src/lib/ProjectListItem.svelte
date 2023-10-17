<script>
  import { currentProjectId, currentTool, showTaskModal, weeks } from '$lib/stores/stores';
	import TaskList from './TaskList.svelte';
	import Button from './Button.svelte';
	import Plus from './icons/Plus.svelte';
	import ButtonGroup from './ButtonGroup.svelte';

  export let name = '';
  export let color = '#000000';
  export let id = 0;
  export let tasks = Array();

  let estimatedHours = 0;
  let completedHours = 0;
  let plannedHours = 0;
  let accountedHours = 0;

  $: {
    estimatedHours = 0;
    completedHours = 0;
    plannedHours = 0;

    tasks.forEach(t => {
      estimatedHours += t.estimated_seconds / 3600;
      completedHours += t.tracked_seconds / 3600 / 1000;
    })
  
    Object.keys($weeks).forEach(k => {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(date.getDate() - (date.getDay() || 7) + 1);
      let currentDate = date.valueOf();
  
      if (currentDate <= Number(k)) {
        Object.keys($weeks[k]).forEach(i => {
          const projectId = $weeks[k][i];
          if (projectId === id) {
            plannedHours += 1;
          }
        })
      }
    })
  
    estimatedHours = Math.round(estimatedHours);
    completedHours = Math.round(completedHours);
    plannedHours = Math.round(plannedHours);
    accountedHours = completedHours + plannedHours;
  }


  $: selected = id === $currentProjectId && $currentTool == 'paintBucket';

  function toggleSelection() {
    selected = !selected;
    if (selected) {
      $currentProjectId = id;
      $currentTool = 'paintBucket';
    }
  }

  function newTask() {
    $showTaskModal = true;
    $currentProjectId = id;
  }
</script>

<section class="my-2 rounded-lg">
  <header class="flex justify-between gap-1 group" class:selected>
    <h3 class="flex flex-grow items-baseline bg-gray-100 rounded-md p-1.5" style:background-color={selected ? color : null}>
      <button class={`flex items-center gap-2 h-full py-1 px-2 w-full ${selected ? `text-white` : 'text-gray-500'}`} on:click={toggleSelection}>
        <span class="inline-block w-3 h-3 rounded-sm border-gray-200 border" style:background-color={color}></span>
        {name}
        <div class="ml-auto text-xs text-gray-400/50">
          {#if estimatedHours >= accountedHours}
            {#if estimatedHours > accountedHours}
              <span class={`rounded-full py-1 px-2 text-xs`} style:background-color={selected ? 'white' : color} style:color={selected ? color : 'white'}>
                {estimatedHours - accountedHours}
              </span>
            {/if}
          {:else}
            {accountedHours - estimatedHours} over
          {/if}
        </div>
      </button>
    </h3>
    <ButtonGroup groupHover>
      <Button small action={newTask}><Plus/></Button>
    </ButtonGroup>
  </header>
  
  {#if tasks.length}
    <TaskList tasks={tasks}/>
  {/if}
</section>

<style>
  header.selected :global(svg) {
    @apply fill-white;
  }
</style>
