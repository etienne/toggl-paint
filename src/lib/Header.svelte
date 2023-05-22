<script>
  import { activeProjects, currentProjectId, currentTool, showProjectList } from '$lib/stores/stores';

	import Button from "./Button.svelte";
  import SegmentedControl from "./SegmentedControl.svelte";
</script>

<header class="col-span-full -mt-4 -mx-4 mb-4 px-4 py-2 bg-gray-100">
  <menu class="flex justify-center">
    <li>
      <SegmentedControl>
        <Button selected={$currentTool == 'eyedropper'} action={() => $currentTool = 'eyedropper'}>
          <img src="/eyedropper.svg" alt="eyedropper Tool">
        </Button>
        <Button selected={$currentTool == 'eraser'} action={() => $currentTool = 'eraser'}>
          <img src="/eraser.svg" alt="Eraser Tool">
        </Button>
        <Button selected={$currentTool == 'paintBucket'} action={() => $currentTool = 'paintBucket'}>
          <img src="/paintBucket.svg" alt="Paint Bucket Tool">
        </Button>
      </SegmentedControl>
    </li>
    <li class="md:hidden">
      <Button action={() => $showProjectList = !$showProjectList}>
        {#if $currentProjectId === 0}
          No project selected
        {:else}
          {$activeProjects?.find(p => p.id === $currentProjectId).name}
        {/if}
      </Button>
    </li>
  </menu>
</header>
