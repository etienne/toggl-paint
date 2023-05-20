<script>
  export let mobileOnly = false;
  export let action = () => {};
  export let selected = false;
  export let wide = false;
  export let small = false;
  export let flex = false;
  export let square = false;
  export let borderless = false;
</script>

<button class:mobileOnly class:selected class:wide class:flex class:small class:square class:borderless on:click={action}>
  <slot></slot>
</button>

<style>
  button {
    text-align: left;
    padding: calc(1px + 0.6rem);
    border: none;
    border-radius: 0;
    cursor: pointer;
    background-color: #eee;
    border-radius: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
  }

  button:hover {
    background-color: #ddd;
  }

  button.selected {
    background-color: white;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.15);
  }

  button.flex {
    display: flex;
    align-items: center;
  }

  button.wide {
    width: 100%;
  }

  button.borderless {
    background-color: transparent;
  }

  button.borderless:hover {
    background-color: #eee;
  }

  button.small {
    padding: calc(1px + 0.3rem) calc(1px + 0.4rem);
    font-size: 75%;
  }

  button.square {
    border-radius: 0;
  }

  button > :global(*) {
    display: block;
    margin-inline: auto;
  }
</style>