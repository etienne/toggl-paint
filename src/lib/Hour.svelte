<script>
  import { weeks, currentProjectId, projects, currentTool, isDragging } from '$lib/stores/stores';

  export let week = 0;
  export let index = 0;

  $: color = $projects.find(p => p.id === $weeks[week]?.[index])?.color;

  function handleMouseDown() {
    $isDragging = true;
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

  function handleMouseEnter() {
    if ($isDragging) {
      handleMouseDown();
    }
  }
</script>

<button
  on:mousedown={handleMouseDown}
  on:mouseenter={handleMouseEnter}
  style={color ? `background-color: ${color}` : null}>
</button>

<style>
  button {
    display: block;
    width: 100%;
    border: 0;
    background-color: #f0f0f0;
    aspect-ratio: 1/1;
  }

  button::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    transition: all 0.05s;
  }

  :global(main.eyedropper) button {
    cursor: url('/eyedropper.svg') 2 17, pointer;
  }

  :global(main.paintBucket) button {
    cursor: url('/paintBucket.svg') 16 15, pointer;
  }

  :global(main.eraser) button {
    cursor: url('/eraser.svg') 6 13, pointer;
  }

  button:hover::after {
    background-color: rgba(0, 0, 0, 0.07);
  }
</style>