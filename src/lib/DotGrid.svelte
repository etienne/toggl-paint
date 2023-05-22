<script>
  export let count = 0;
  export let color = '#000000';
  export let reversed = false;
</script>

<div class="grid grid-cols-10 gap-0.5">
  {#each { length: count } as index}
    <span class="block w-0.5 h-0.5" style="background-color: {reversed ? 'white' : color}"></span>
  {/each}
</div>

<style>
  div {
    direction: rtl;
  }
</style>