<script>
	import Button from "./Button.svelte";
  import SegmentedControl from "./SegmentedControl.svelte";
  import Eraser from "$lib/icons/Eraser.svelte";
	import PaintBucket from "./icons/PaintBucket.svelte";
	import Eyedropper from "./icons/Eyedropper.svelte";

  export let projects = Array();
  export let currentTool = '';
  export let currentProject = 0;
  export let setTool = (tool = '') => {};
  export let toggleProjectList = () => {};
</script>

<header>
  <menu>
    <li>
      <SegmentedControl>
        <Button selected={!['eraser', 'paintBucket'].includes(currentTool)} action={() => setTool('eyeDropper')}><Eyedropper/></Button>
        <Button selected={currentTool == 'eraser'} action={() => setTool('eraser')}><Eraser/></Button>
        <Button selected={currentTool == 'paintBucket'} action={() => setTool('paintBucket')}><PaintBucket/></Button>
      </SegmentedControl>
    </li>
    <li class="projectSelector">
      <Button wide={true} action={toggleProjectList}>
        {#if currentProject === 0}
          No project selected
        {:else}
          {projects.find(p => p.id == currentProject).name}
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