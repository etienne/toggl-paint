<script>
  import { projects, activeProjects, currentProjectId, tasks, me } from '$lib/stores/stores';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
  import ProjectList from '$lib/ProjectList.svelte';
	import TaskModal from '$lib/TaskModal.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  $me = data.me;
  $projects = data.projects;
  $tasks = data.tasks;

  $: if ($activeProjects.length > 0) {
    $currentProjectId = $activeProjects[0].id;
  }
</script>

<Header/>
<ProjectList/>
<Main/>
<TaskModal/>
