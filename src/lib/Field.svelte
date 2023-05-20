<script>
  export let name = '';
  export let label = '';
  export let value = '';
</script>

<div>
  {#if label}
    <label for={name}>{label}</label>
  {/if}
  <input {name} id={name} bind:value>
</div>

<style>
  input {
    width: 100%;
  }
</style>