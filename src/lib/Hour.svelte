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
  style={color ? `background-color: ${color}` : null}
  class="block aspect-square w-full bg-gray-100 after:block after:w-full after:h-full hover:after:bg-gray-700/5"
>
</button>
