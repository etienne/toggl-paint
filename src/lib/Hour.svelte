<script>
  import { weeks, currentProjectId, projects, currentTool, isDragging } from '$lib/stores/stores';

  export let week = 0;
  export let index = 0;
  export let color = '';
  export let completion = 0.0;
  export let showProjectName = false;
  export let projectName = '';

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
      case 'eyedropper':
        if ($weeks[week]?.[index]) {
          $currentProjectId = $weeks[week]?.[index];
          $currentTool = 'paintBucket';
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
  style:background-color={color}
  class="block relative aspect-square w-full bg-gray-100 after:block after:w-full after:h-full hover:after:bg-gray-700/5"
>
  {#if completion}
    <span class={`block bottom-[8%] left-[8%] origin-left -rotate-45 absolute h-px border-b border-white ${completion < 1 ? 'border-dashed' : ''}`} style:width={`${completion * 116}%`}></span>
  {/if}

  {#if showProjectName}
    <span class="absolute top-1 left-1 px-1 py-0.5 text-left text-xs rounded-sm leading-4 w-max z-10 text-white bg-black/20">
      {projectName}
    </span>
  {/if}  
</button>

<style>
  :global(main.eyedropper) button {
    cursor: url('/eyedropper.svg') 2 17, pointer;
  }

  :global(main.paintBucket) button {
    cursor: url('/paintBucket.svg') 16 15, pointer;
  }

  :global(main.eraser) button {
    cursor: url('/eraser.svg') 6 13, pointer;
  }
</style>