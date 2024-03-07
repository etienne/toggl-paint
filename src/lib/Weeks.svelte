<script>
  import { currentTool } from "./stores/stores";
	import Week from "./Week.svelte";

  let showThisWeek = true;
  let weeks = [...Array(26)].map((_, index) => {
    let date = new Date();
    let offset = showThisWeek ? 0 : 7;
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() - (date.getDay() || 7) + offset + 1 + (index * 7));
    let id = date.valueOf();
    return {id, date};
  });
</script>

<ul class="{`${$currentTool}`} grid grid-cols-[repeat(auto-fill,_minmax(18rem,_1fr))] gap-4">
  {#each weeks as {id: weekId, date}, index}
  <li>
    <Week id={weekId} {date} isCurrentWeek={index === 0}/>
  </li>
  {/each}
</ul>
