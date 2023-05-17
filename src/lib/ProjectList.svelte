<script>
  import { projectsWithTasks, showProjectList } from '$lib/stores/stores';
	import ProjectListItem from "./ProjectListItem.svelte";
</script>

<ul class:visibleOnMobile={showProjectList}>
  {#each $projectsWithTasks as p}
    <li>
      <ProjectListItem name={p.name} color={p.color} id={p.id} tasks={p.tasks}/>
    </li>  
  {/each}
</ul>

<style>
  ul {
    margin-top: 1rem;
    display: none;
    flex-direction: column;
    gap: 0.8rem;
    padding-inline: 1rem;
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
