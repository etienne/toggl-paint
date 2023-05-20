<script>
  import { activeProjectsWithTasks, showProjectList } from '$lib/stores/stores';
	import ProjectListItem from "./ProjectListItem.svelte";
</script>

<section>
  <ul class:visibleOnMobile={showProjectList} class="text-sm divide-y divide-gray-100">
    {#each $activeProjectsWithTasks as p}
      <li>
        <ProjectListItem name={p.name} color={p.color} id={p.id} tasks={p.tasks}/>
      </li>  
    {/each}
  </ul>
</section>

