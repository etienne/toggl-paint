<script>
  import { projects, weeks, isDragging, hoursThisWeekByProject } from "./stores/stores";
	import Hour from "./Hour.svelte";
	import TaskProgress from "./TaskProgress.svelte";

  export let id = 0;
  export let date = new Date();
  export let isCurrentWeek = false;

  let hoursCountedByProject = Object();
  let hours = Object();

  let totalHours = 0;
  let currentHours = 0;

  let dateString = isCurrentWeek
    ? 'Cette semaine'
    : `Semaine du ${date.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long' })}`;

  $: {
    hoursCountedByProject = Object();
    hours = Array(28).fill({}).map((_, index) => {
      let project = $projects.find(p => p.id === $weeks[id]?.[index]);

      if (project) {
        if (!hoursCountedByProject[project.id]) {
          hoursCountedByProject[project.id] = 0;
        }

        let completion = Math.max(0, Math.min(1, ($hoursThisWeekByProject[project.id] || 0) - hoursCountedByProject[project.id]));

        hoursCountedByProject[project.id] += 1;

        return {
          color: project.color,
          completion: isCurrentWeek ? completion : 0,
          showProjectName: hoursCountedByProject[project.id] === 1,
          projectName: project.name,
        }
      }
      return {};
    });

    if (isCurrentWeek) {
      totalHours = hours.filter((h = {}) => Object.keys(h).length !== 0).length;
      currentHours = 0;
      Object.keys(hours).forEach(h => {
        currentHours += hours[h].completion || 0;
      })
    }
  }

  function sortWeek() {
    let hoursByProjectId = Object.values($weeks[id]);
    let hoursByProject = hoursByProjectId.map(projectId => $projects.find(p => p.id === projectId) || null);
    let hoursBySortedProject = hoursByProject.sort((a, b) => {
      if (a === null && b === null) {
        return 0;
      }
      if (a === null) {
        return 1;
      }
      if (b === null) {
        return -1;
      }
      return a.name.localeCompare(b.name);
    });
    let hoursBySortedProjectId = hoursBySortedProject.map(p => p?.id || null);
    $weeks[id] = hoursBySortedProjectId;
  }
  
  function handleMouseUp() {
    sortWeek();
    $isDragging = false;
  }
</script>

<article>
  <header class="flex items-baseline justify-between">
    <h2 class="font-bold text-sm mb-2">{dateString}</h2>
    {#if isCurrentWeek}
      <TaskProgress showAsPercents total={totalHours} current={currentHours}/>
    {/if}
  </header>
  <ul on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp} class="rounded-lg overflow-hidden grid grid-cols-6 gap-px">
    {#each hours as {color, completion, projectName, showProjectName}, index}
    <li>
      <Hour week={id} {index} {color} {completion} {showProjectName} {projectName} />
    </li>
  	{/each}
  </ul>
</article>
