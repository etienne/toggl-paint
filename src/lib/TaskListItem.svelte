<script>
  import { currentProjectId, me, showTaskModal, showTaskDeleteModal, currentTaskId } from '$lib/stores/stores';
	import Button from "./Button.svelte";
	import ButtonGroup from "./ButtonGroup.svelte";
	import DropdownMenu from "./DropdownMenu.svelte";
	import MenuItem from "./MenuItem.svelte";
  import TaskProgress from "./TaskProgress.svelte";
	import ThreeDotsVertical from "./icons/ThreeDotsVertical.svelte";

  export let task = {
    id: 0,
    name: '',
    estimated_seconds: 0,
    tracked_seconds: 0,
    project_id: 0,
    workspace_id: 0,
  };

  const total = task.estimated_seconds;
  const current = task.tracked_seconds / 1000;

  let showDropdown = false;

  function editTask() {
    $currentTaskId = task.id;
    $currentProjectId = task.project_id;
    $showTaskModal = true;
  }

  function deleteTask() {
    $currentTaskId = task.id;
    $currentProjectId = task.project_id;
    $showTaskDeleteModal = true;
  }
</script>

<li class="p-1 pl-3 bg-gray-100 flex items-center justify-between group first:rounded-t-lg last:rounded-b-lg">
  <span>{task.name}</span>
  <div class="flex gap-1 relative">
    <TaskProgress total={total} current={current} />
    <ButtonGroup groupHover>
      <Button small action={() => showDropdown = !showDropdown}><ThreeDotsVertical/></Button>
    </ButtonGroup>
    <DropdownMenu hide={() => showDropdown = false} visible={showDropdown}>
      <li>
        <form method="POST" action="?/taskComplete">
          <MenuItem submit>Complete</MenuItem>
          <input type=hidden name="workspace_id" value={task.workspace_id}/>
          <input type=hidden name="project_id" value={task.project_id}/>
          <input type=hidden name="task_id" value={task.id}/>
        </form>
      </li>
      <li><MenuItem action={editTask}>Edit</MenuItem></li>
      <li><MenuItem action={deleteTask}>Delete</MenuItem></li>
    </DropdownMenu>
  </div>
</li>

<style>
  li :global(svg) {
    @apply fill-gray-400;
  }
</style>