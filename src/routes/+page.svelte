<script>
	import Header from '$lib/Header.svelte';
	import Main from '$lib/Main.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  let currentTool = '';

  function setTool(tool = '') {
    currentTool = tool;
  }
</script>

<Header projects={data.projects} {currentTool} {setTool}/>
<Main/>
