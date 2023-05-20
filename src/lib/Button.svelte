<script>
  export let action = () => {};
  export let selected = false;
</script>

<button class="rounded bg-gray-700/5 hover:bg-gray-700/10 p-2" on:click={action}>
  <slot></slot>
</button>
