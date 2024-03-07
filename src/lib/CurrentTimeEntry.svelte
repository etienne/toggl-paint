<script>
  import { currentTimeEntry, projects } from '$lib/stores/stores';

  let project = Object();
  let runningTimer = '';
  $: {
    if ($currentTimeEntry) {
      project = $projects.find(p => p.id === $currentTimeEntry.project_id);
      let startDate = new Date($currentTimeEntry.start);
      runningTimer = new Date((new Date().getTime() - startDate.getTime())).toISOString().substring(11, 19);
    }
  }
</script>

<section class="flex border text-sm rounded-md px-3 h-full items-center justify-between">
  {#if $currentTimeEntry}
    <p class="flex gap-2 items-baseline">
      <span class="inline-block w-3 h-3 rounded-sm border-gray-200 border" style:background-color={project?.color}></span>
      {project?.name}
      <span class="text-gray-500">{$currentTimeEntry.description}</span>
    </p>
    <p>
      {runningTimer}
    </p>
  {:else}
    —
  {/if}
</section>
