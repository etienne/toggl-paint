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
