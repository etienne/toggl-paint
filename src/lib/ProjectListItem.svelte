<script>
  export let name = '';
  export let color = '#000000';
  export let selected = false;
  export let select = () => {};

  function toggleSelection() {
    selected = !selected;
    if (selected) {
      select();
    }
  }

</script>

<button on:click={toggleSelection} class:selected style={(selected || null) && `background-color: ${color}`}>
  <span class="swatch" style="background-color: {color}"></span>
  {name}
</button>

<style>
  button {
    cursor: pointer;
    display: flex;
    align-items: start;
    width: 100%;
    text-align: left;
    gap: 0.5rem;
    border: none;
    font-size: 0.8rem;
    line-height: 1.2rem;
    background-color: transparent;
    border-radius: 0.3rem;
    padding: 0.3rem 0.6rem;
    text-overflow: ellipsis;
  }

  button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  button.selected {
    color: white;
    background-color: rgba(0, 0, 0, 0.75);
  }

  span.swatch {
    display: inline-block;
    width: 0.75rem;
    margin-top: 0.2rem;
    aspect-ratio: 1/1;
    border-radius: 0.1rem;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5);
  }
</style>