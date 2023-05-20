<script>
  export let total = 0;
  export let current = 0;

  let currentHours = Math.round(current / 3600);
  let totalHours = Math.round(total / 3600);
  let extraHours = 0;
  let remainingHours = 0;

  if (currentHours > totalHours) {
    extraHours = currentHours - totalHours;    
  } else {
    remainingHours = totalHours - currentHours;
  }
</script>

<div class="flex items-center gap-2 text-xs text-gray-300">
  {currentHours}/{totalHours}h
  <progress max={total} value={current} class="w-12 h-0.5">
    {current/total * 100}%
  </progress>
</div>

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