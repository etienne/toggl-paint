<script>
  import { activeProjectsWithTasks, showProjectList } from '$lib/stores/stores';
	import ProjectListItem from "./ProjectListItem.svelte";
</script>

<section>
  <ul class:visibleOnMobile={showProjectList}>
    {#each $activeProjectsWithTasks as p}
      <li>
        <ProjectListItem name={p.name} color={p.color} id={p.id} tasks={p.tasks}/>
      </li>  
    {/each}
  </ul>
</section>

<style>
  section {
    padding: 1.5rem;
  }

  ul {
    margin-top: 1rem;
    display: none;
    flex-direction: column;
  }

  ul.visibleOnMobile {
    display: flex;
  }

  li {
    border-bottom: 1px solid #eee;
    padding-block: 0.4rem;
  }

  @media (min-width: 40rem) {
    ul {
      display: flex;
    }
  }
</style>
