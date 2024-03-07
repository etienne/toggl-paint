<script>
	import Header from '$lib/Header.svelte';
  import { projects, tasks, me, timeEntries, currentTimeEntry } from '$lib/stores/stores';
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

<Header/>
<ProjectList/>
<Weeks/>
<TaskModal/>
<TaskDeleteModal/>
