<script>
	import Week from "./Week.svelte";

</script>
<main>
  <ul>
    {#each Array(10) as _, index (index)}
    <li>
      <Week/>
    </li>
    {/each}
  </ul>
</main>

<style>
  main {
    padding: 1rem;
  }

  @media (min-width: 40rem) {
    main {
      padding: 1.5rem 3rem;
    }
  }

  ul {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  }
</style>