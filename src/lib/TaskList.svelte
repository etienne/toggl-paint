<script>
	import TaskListItem from "./TaskListItem.svelte";

  export let tasks = Array();
</script>

<ul class="mb-2 grid gap-px">
  {#each tasks as task}
    <TaskListItem {task}/>
  {/each}
</ul>
