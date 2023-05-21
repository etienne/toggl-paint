<script>
  import { showTaskDeleteModal, currentProjectId, currentTaskId, currentTask, me } from '$lib/stores/stores';

  import Button from "./Button.svelte";
  import FormModal from "./FormModal.svelte";

  let name = '';

  $: if ($currentTaskId) {
    updateFields();
  }
  
  function updateFields() {
    name = $currentTask.name;
  }

  function cancel() {
    $currentTaskId = 0;
  }
</script>

<FormModal bind:showModal={$showTaskDeleteModal} action="?/taskDelete" {cancel}>
  <svelte:fragment slot="body">
    <p>Are you sure you want to delete the task “{name}”?</p>
    <input type=hidden name="workspace_id" value={$me.default_workspace_id}/>
    <input type=hidden name="project_id" value={$currentProjectId}/>
    <input type=hidden name="task_id" value={$currentTaskId}/>
  </svelte:fragment>
  <svelte:fragment slot="footer">
    <Button action={cancel}>Cancel</Button>
    <Button primary submit>Delete</Button>
  </svelte:fragment>
</FormModal>
