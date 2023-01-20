<script>
	import ProjectListItem from "./ProjectListItem.svelte";

  export let projects = Array();
  export let currentProject = 0;
  export let currentTool = '';
  export let visibleOnMobile = false;
  export let setProject = (id = 0) => {};

  let paintBucketIsActive = false;
  $: paintBucketIsActive = currentTool == 'paintBucket';
  let activeProjects = Array();
  activeProjects = projects.filter(p => p.active);
</script>


<ul class:visibleOnMobile>
  {#each activeProjects as p}
    <li>
      <ProjectListItem name={p.name} color={p.color} selected={paintBucketIsActive && (currentProject == p.id)} select={() => {setProject(p.id)}}/>
    </li>  
  {/each}
</ul>

<style>
  ul {
    margin-top: 1rem;
    display: none;
    flex-direction: column;
    gap: 1px;
  }

  ul.visibleOnMobile {
    display: flex;
  }

  @media (min-width: 40rem) {
    ul {
      display: flex;
    }
  }
</style>
