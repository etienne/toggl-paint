<script>
	import TaskListItem from "./TaskListItem.svelte";

  export let tasks = Array();
</script>

<ul class="mb-2 rounded-lg grid gap-px overflow-hidden">
  {#each tasks as t}
    <TaskListItem name={t.name} total={t.estimated_seconds} current={t.tracked_seconds / 1000}/>
  {/each}
</ul>