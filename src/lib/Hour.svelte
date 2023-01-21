<script>
  export let week = 0;
  export let index = 0;

  function paint() {
    console.log('paint', week, index);
  }  
</script>

<button on:click={paint}></button>

<style>
  button {
    display: block;
    width: 100%;
    border: 0;
    background-color: #f0f0f0;
    aspect-ratio: 1/1;
    cursor: pointer;
    transition: all 0.1s;
  }

  button:hover {
    background-color: #ddd;
  }
</style>