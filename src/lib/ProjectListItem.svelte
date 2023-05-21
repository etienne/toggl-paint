<script>
  import { currentProjectId, currentTool, showTaskModal } from '$lib/stores/stores';
	import TaskList from './TaskList.svelte';
	import Button from './Button.svelte';
	import Plus from './icons/Plus.svelte';
	import ButtonGroup from './ButtonGroup.svelte';

  export let name = '';
  export let color = '#000000';
  export let id = 0;
  export let tasks = Array();

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

<section>
  <header class="flex justify-between rounded-lg p-1 my-1 group" class:selected style={selected ? `background-color: ${color}` : null}>
    <h3 class="flex flex-grow">
      <button class={`flex items-center gap-2 py-1 px-3 w-full ${selected ? `text-white` : 'text-gray-500'}`} on:click={toggleSelection}>
        <span class="inline-block w-3 h-3 rounded-sm border-white border" style="background-color: {color}"></span>
        {name}
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
