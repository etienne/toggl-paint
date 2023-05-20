<script>
	import Button from "./Button.svelte";
  import TaskProgress from "./TaskProgress.svelte";
	import ChevronDown from "./icons/ChevronDown.svelte";

  export let name = '';
  export let total = 0;
  export let current = 0;
</script>

<li>
  <Button flex wide square>
    <span>{name}</span>
    <TaskProgress total={total} current={current} />
  </Button>
  <Button small square><ChevronDown/></Button>
</li>

<style>
  li {
    display: flex;
  }

  span {
    flex-grow: 1;
  }

  li :global(svg) {
    width: 11px;
  }
</style>
