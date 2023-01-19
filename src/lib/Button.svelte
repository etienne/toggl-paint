<script>
  export let mobileOnly = false;
  export let action = () => {};
  export let selected = false;
</script>

<button class:mobileOnly class:selected on:click={action}>
  <slot></slot>
</button>

<style>
  button {
    padding: 0.8rem;
    border: none;
    border-radius: 0;
    box-shadow: 0 0 0 1px #ccc;
    cursor: pointer;
  }

  button:hover {
    background-color: #ddd;
  }

  button.selected {
    background-color: #ccc;
  }
  
  button:first-child {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
  }

  button:last-child {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  button > :global(*) {
    display: block;
  }
</style>