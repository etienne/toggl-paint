<script>
  export let total = 0;
  export let current = 0;
</script>

<div>
  {Math.round(current/3600 * 10) / 10}/{Math.round(total/3600 * 10) / 10}h
  <progress max={total} value={current}>{current/total * 100}%</progress>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    gap: 0.5rem;
    color: rgba(0, 0, 0, 0.3);
  }

  progress {
    width: 50px;
    height: 2px;
    border: none;
  }

  progress::-webkit-progress-bar {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.07);
  }

  progress::-webkit-progress-value {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  progress::-moz-progress-bar {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
