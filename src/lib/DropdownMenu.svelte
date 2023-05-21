<script>
  export let hide = () => {};
  export let visible = false;
</script>

<menu class={`absolute top-8 right-0 z-10 bg-white rounded-md shadow-lg p-1 min-w-[8rem] ${visible ? 'block' : 'hidden'}`}>
  <slot/>
</menu>

<svelte:body on:click={hide} />
