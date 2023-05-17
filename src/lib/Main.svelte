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
<main class={$currentTool}>
  <ul>
    {#each weeks as {id: weekId, date}}
    <li>
      <Week id={weekId} {date}/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    padding: 1rem;
  }

  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }

  @media (min-width: 40rem) {
    main {
      padding: 1.5rem;
    }

    ul {
      gap: 1.5rem;
    }
  }
</style>