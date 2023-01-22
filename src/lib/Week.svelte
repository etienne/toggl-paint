<script>
  import { isDragging } from "./stores/stores";
	import Hour from "./Hour.svelte";

  export let id = 0;
  export let date = new Date();

  let dateString = date.toLocaleDateString('fr-CA', { day: 'numeric', month: 'long' });

  function handleMouseUp() {
    $isDragging = false;
  }
</script>

<article>
  <h2>Semaine du {dateString}</h2>
  <ul on:mouseup={handleMouseUp} on:mouseleave={handleMouseUp}>
    {#each Array(28) as _, index (index)}
    <li>
      <Hour week={id} {index}/>
    </li>
  	{/each}
  </ul>
</article>

<style>
  h2 {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1px;
    border-radius: 0.5rem;
    overflow: hidden;
  }
</style>