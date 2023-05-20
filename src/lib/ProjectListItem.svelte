<script>
  import { currentProjectId, currentTool, showTaskModal } from '$lib/stores/stores';
	import TaskList from './TaskList.svelte';
	import Button from './Button.svelte';

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
  <header>
    <h3>
      <span class="swatch" style="background-color: {color}"></span>
      {name}
    </h3>
    <Button small action={newTask}>+</Button>
  </header>
  
  {#if tasks.length}
    <TaskList tasks={tasks}/>
  {/if}
</section>

<style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  h3 {
    display: flex;
    font-weight: normal;
    font-size: 0.75rem;
    text-transform: uppercase;
    gap: 0.5rem;
    align-items: baseline;
    color: rgba(0, 0, 0, 0.5);
  }

  span.swatch {
    position: relative;
    top: 2px;
    display: inline-block;
    width: 0.75rem;
    aspect-ratio: 1/1;
    border-radius: 0.1rem;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5);
  }
</style>