<script>
	import Hour from "./Hour.svelte";
</script>

<article>
  <h2>Week of</h2>
  <ul>
    {#each Array(28) as _, index (index)}
    <li>
      <Hour/>
    </li>
  	{/each}
  </ul>
</article>

<style>
  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1px;
  }
</style>