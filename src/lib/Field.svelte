<script>
  export let name = '';
  export let label = '';
  export let value = '';
  export let long = false;
  export let short = false;
</script>

<div class="mb-4 last:mb-0">
  {#if label}
    <label for={name} class="block mb-1">{label}</label>
  {/if}
  <slot name="before"/>
  <input class={`border p-2 rounded ${long && 'w-96'} ${short && 'w-24'}`} {name} id={name} bind:value>
  <slot name="after"/>
</div>
