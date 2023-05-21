<script>
  import { currentTool } from "./stores/stores";
	import Week from "./Week.svelte";

  let showThisWeek = true;
  let weeks = [...Array(16)].map((_, index) => {
    let date = new Date();
    let offset = showThisWeek ? 0 : 7;
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (date.getDay() || 7) + offset + 1 + (index * 7));
    let id = date.valueOf();
    return {id, date};
  });
</script>

<main class={`md:col-span-3 ${$currentTool}`}>
  <ul class="grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-4">
    {#each weeks as {id: weekId, date}}
    <li>
      <Week id={weekId} {date}/>
    </li>
    {/each}
  </ul>
</main>
