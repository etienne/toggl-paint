<script>
  import { projects, activeProjects, currentProjectId } from '$lib/stores/stores';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
  import ProjectList from '$lib/ProjectList.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  $projects = data.projects;

  $: if ($activeProjects.length > 0) {
    $currentProjectId = $activeProjects[0].id;
  }
</script>

<Header/>
<ProjectList/>
<Main/>
