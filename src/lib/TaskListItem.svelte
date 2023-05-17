<script>
	import TaskProgress from "./TaskProgress.svelte";

  export let name = '';
  export let total = 0;
  export let current = 0;
</script>

<button>
  {name}
  <TaskProgress total={total} current={current} />
</button>

<style>
  button {
    width: 100%;
    text-align: left;
    background-color: #f3f3f3;
    padding: 10px;
    border: none;
    display: flex;
    justify-content: space-between;
  }
</style>
