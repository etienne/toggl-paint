<script>
	import TaskListItem from "./TaskListItem.svelte";

  export let tasks = Array();
</script>

<ul>
  {#each tasks as t}
  <li>
    <TaskListItem name={t.name} total={t.estimated_seconds} current={t.tracked_seconds / 1000}/>
  </li>
  {/each}
</ul>

<style>
  ul {
    display: grid;
    gap: 1px;
    border-radius: 0.5rem;
    overflow: hidden;
    margin-top: 0.4rem;
  }
</style>