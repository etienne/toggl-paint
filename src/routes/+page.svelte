<script>
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  let currentTool = '';
  let currentProject = 0;

  function setTool(tool = '') {
    currentTool = tool;
  }

  function setProject(id = 0) {
    currentProject = id;
    setTool('paintBucket');
  }
</script>

<Header projects={data.projects} {currentTool} {currentProject} {setTool} {setProject}/>
<Main/>
