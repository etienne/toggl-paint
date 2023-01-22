<script>
  import { activeProjects, currentProjectId, currentTool, showProjectList } from '$lib/stores/stores';

	import Button from "./Button.svelte";
  import SegmentedControl from "./SegmentedControl.svelte";
  import Eraser from "$lib/icons/Eraser.svelte";
	import PaintBucket from "./icons/PaintBucket.svelte";
	import Eyedropper from "./icons/Eyedropper.svelte";
</script>

<header>
  <menu>
    <li>
      <SegmentedControl>
        <Button selected={$currentTool == 'eyeDropper'} action={() => $currentTool = 'eyeDropper'}><Eyedropper/></Button>
        <Button selected={$currentTool == 'eraser'} action={() => $currentTool = 'eraser'}><Eraser/></Button>
        <Button selected={$currentTool == 'paintBucket'} action={() => $currentTool = 'paintBucket'}><PaintBucket/></Button>
      </SegmentedControl>
    </li>
    <li class="projectSelector">
      <Button wide={true} action={() => $showProjectList = !$showProjectList}>
        {#if $currentProjectId === 0}
          No project selected
        {:else}
          {$activeProjects?.find(p => p.id === $currentProjectId).name}
        {/if}
      </Button>
    </li>
  </menu>
</header>

<style>
  header {
    background-color: white;
    box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.05);
    padding: 0.7rem 1rem;
    position: sticky;
    top: 0;
  }

  menu {
    display: flex;
    gap: 1rem;
  }

  li.projectSelector {
    flex-grow: 1;
  }

  @media (min-width: 40rem) {
    header {
      grid-area: header;
    }

    menu {
      flex-direction: column;
      width: fit-content;
      margin-inline: auto;
    }

    li.projectSelector {
      display: none;
    }
  }
</style>