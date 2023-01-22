<script>
  import { weeks, currentProjectId, projects, currentTool } from '$lib/stores/stores';

  export let week = 0;
  export let index = 0;

  $: color = $projects.find(p => p.id === $weeks[week]?.[index])?.color;

  function handleClick() {
    console.log($currentTool);
    switch ($currentTool) {
      case 'paintBucket':
        if ($weeks[week]) {
          $weeks[week][index] = $currentProjectId;
        } else {
          $weeks[week] = { [index]: $currentProjectId };
        }
        break;
      case 'eraser':
        if ($weeks[week]) {
          $weeks[week][index] = null;
        }
        break;
      default:
        if ($weeks[week]?.[index]) {
          $currentProjectId = $weeks[week]?.[index];
        }
        break;
    }
  }  
</script>

<button on:click={handleClick} style={color ? `background-color: ${color}` : null}></button>

<style>
  button {
    display: block;
    width: 100%;
    border: 0;
    background-color: #f0f0f0;
    aspect-ratio: 1/1;
    cursor: pointer;
    transition: all 0.05s;
  }

  button:hover {
    background-color: #ddd;
  }
</style>