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
    cursor: pointer;
    background-color: #eee;
    border-radius: 0.3rem;
  }

  @media (min-width: 40rem) {
    button {
      flex-grow: 1;
    }
  }

  button:hover {
    background-color: #ddd;
  }

  button.selected {
    background-color: white;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
  }

  button > :global(*) {
    display: block;
    margin-inline: auto;
  }
</style>