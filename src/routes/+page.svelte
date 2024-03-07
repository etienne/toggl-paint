<script>
  import { projects, tasks, me, timeEntries, currentTimeEntry } from '$lib/stores/stores';
	import Menu from '$lib/Menu.svelte';
	import Weeks from '$lib/Weeks.svelte';
  import ProjectList from '$lib/ProjectList.svelte';
	import TaskModal from '$lib/TaskModal.svelte';
	import TaskDeleteModal from '$lib/TaskDeleteModal.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  $me = data.me;
  $projects = data.projects;
  $tasks = data.tasks;
  $timeEntries = data.timeEntries;
  $currentTimeEntry = data.currentTimeEntry;
</script>

<div class="grid grid-cols-[396px,1fr] grid-rows-[auto,1fr] h-screen overflow-hidden gap-x-4">
  <header class="col-span-full">
    <Menu/>
  </header>
  <aside class="h-full overflow-y-auto pt-4 pl-4">
    <ProjectList/>
  </aside>
  <main class="h-full overflow-y-scroll pt-4 pr-4 pb-4">
    <Weeks/>
  </main>
</div>

<TaskModal/>
<TaskDeleteModal/>
