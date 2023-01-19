<script>
	import ProjectListItem from "./ProjectListItem.svelte";

  export let projects = Array();
  export let visibleOnMobile = false;

  let activeProjects = Array();
  let selectedProjectId = 0;
  activeProjects = projects.filter(p => p.active);

  function selectProjectId(id = 0) {
    selectedProjectId = id;
  }
</script>


<ul class:visibleOnMobile>
  {#each activeProjects as p}
    <li>
      <ProjectListItem name={p.name} color={p.color} selected={selectedProjectId == p.id} select={() => {selectProjectId(p.id)}}/>
    </li>  
  {/each}
</ul>

<style>
  ul {
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
