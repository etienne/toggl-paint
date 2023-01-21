<script>
	import App from '$lib/App.svelte';
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';
  import ProjectList from '$lib/ProjectList.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  let currentTool = '';
  let currentProject = 0;
  let showProjectList = false;

  function setTool(tool = '') {
    currentTool = tool;
  }

  function setProject(id = 0) {
    currentProject = id;
    setTool('paintBucket');
  }

  function toggleProjectList() {
    showProjectList = !showProjectList;
  }
</script>

<App>
  <Header projects={data.projects} {currentTool} {currentProject} {setTool} {toggleProjectList}/>
  <ProjectList projects={data.projects} {setProject} {currentProject} {currentTool} visibleOnMobile={showProjectList}/>
  <Main/>
</App>
