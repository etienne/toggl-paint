<script>
  export let total = 0;
  export let current = 0;
  export let showAsPercents = false;

  let currentHours = Math.round(current * 10) / 10;
  let totalHours = Math.round(total);
  let extraHours = 0;
  let remainingHours = 0;
  let percents = Math.round(current/total * 100);

  if (currentHours > totalHours) {
    extraHours = currentHours - totalHours;    
  } else {
    remainingHours = totalHours - currentHours;
  }
</script>

{#if total > 0}
  <div class="flex items-center gap-2 text-xs text-gray-300">
    {#if showAsPercents}
      {percents}%
    {:else}
      {currentHours}/{totalHours}h
    {/if}
    <progress max={total} value={current} class="w-12 h-0.5">
      {current/total * 100}%
    </progress>
  </div>
{/if}

<style>
  progress::-webkit-progress-bar {
    @apply rounded bg-gray-700/10;
  }

  progress::-webkit-progress-value {
    @apply rounded bg-gray-700/40;
  }

  progress::-moz-progress-bar {
    @apply rounded bg-gray-700/10;
  }
</style>