<script>
	import TaskListItem from "./TaskListItem.svelte";

  export let tasks = Array();
</script>

<ul class="grid gap-px divide-y divide-gray-100">
  {#each tasks as task}
    <TaskListItem {task}/>
  {/each}
</ul>
