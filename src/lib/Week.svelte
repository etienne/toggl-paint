<script>
  import { projects, weeks, isDragging, hoursThisWeekByProject } from "./stores/stores";
	import Hour from "./Hour.svelte";
	import TaskProgress from "./TaskProgress.svelte";

  export let id = 0;
  export let date = new Date();
  export let isCurrentWeek = false;

  let hoursCountedByProject = Object();
  let hours = Object();

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
        }
      }
      return {};
    });
  }
  
  function handleMouseUp() {
    $isDragging = false;
  }
</script>

<article>
  <header class="flex items-baseline justify-between">
    <h2 class="font-bold text-sm mb-2">{dateString}</h2>
    {#if isCurrentWeek}
      <TaskProgress total={hours.filter((h = {}) => Object.keys(h).length !== 0).length} current={hours.filter((h = { completion: 0 }) => h.completion === 1).length}/>
    {/if}
  </header>
  <ul on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp} class="rounded-lg overflow-hidden grid grid-cols-6 gap-px">
    {#each hours as {color, completion}, index}
    <li>
      <Hour week={id} {index} {color} {completion} />
    </li>
  	{/each}
  </ul>
</article>
