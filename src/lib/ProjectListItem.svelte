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

  $: selected = id === $currentProjectId;

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
  <header class="flex justify-between py-1 group">
    <h3 class="flex items-center gap-2 text-gray-500">
      <span class="inline-block w-3 h-3 rounded-sm" style="background-color: {color}"></span>
      {name}
    </h3>
    <ButtonGroup groupHover>
      <Button small action={newTask}><Plus/></Button>
    </ButtonGroup>
  </header>
  
  {#if tasks.length}
    <TaskList tasks={tasks}/>
  {/if}
</section>
