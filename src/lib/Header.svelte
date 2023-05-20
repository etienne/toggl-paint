<script>
  import { activeProjects, currentProjectId, currentTool, showProjectList } from '$lib/stores/stores';

	import Button from "./Button.svelte";
  import SegmentedControl from "./SegmentedControl.svelte";
</script>

<header>
  <menu>
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
    <li class="projectSelector">
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
