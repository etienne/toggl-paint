<script>
  import { projects } from '$lib/stores/stores';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
  import ProjectList from '$lib/ProjectList.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
  $projects = data.projects;
</script>

<Header/>
<ProjectList/>
<Main/>
