<script>
	import Button from "./Button.svelte";
	import ButtonGroup from "./ButtonGroup.svelte";
  import TaskProgress from "./TaskProgress.svelte";
	import ThreeDotsVertical from "./icons/ThreeDotsVertical.svelte";

  export let name = '';
  export let total = 0;
  export let current = 0;
</script>

<li class="p-1 pl-3 bg-gray-100 flex items-center justify-between group">
  <span>{name}</span>
  <div class="flex gap-1">
    <TaskProgress total={total} current={current} />
    <ButtonGroup groupHover>
      <Button><ThreeDotsVertical/></Button>
    </ButtonGroup>
  </div>
</li>

<style>
  li :global(svg) {
    @apply fill-gray-400;
  }
</style>