<script>
  import { showTaskModal, currentProjectId, currentTaskId, currentTask, tasks, me } from '$lib/stores/stores';

  import Button from "./Button.svelte";
  import Modal from "./Modal.svelte";
  import Field from "./Field.svelte";

  let name = '';
  let estimate = '';

  $: if ($currentTaskId) {
    updateFields();
  }
  
  function updateFields() {
    name = $currentTask.name;
    estimate = '' + ($currentTask.estimated_seconds / 3600);
  }

  function cancel() {
    name = '';
    estimate = '';
    $currentTaskId = 0;
  }
</script>

<Modal bind:showModal={$showTaskModal}>
  <form method="POST" action="?/task">
    <div class="p-6">
      <Field long name="name" label="Task name" bind:value={name}/>
      <Field short name="estimate" label="Estimate" bind:value={estimate}>
        <span slot="after" class="text-gray-400 ml-1">hours</span>
      </Field>
      <input type=hidden name="workspace_id" value={$me.default_workspace_id}/>
      <input type=hidden name="project_id" value={$currentProjectId}/>
      <input type=hidden name="task_id" value={$currentTaskId}/>
    </div>
    <footer class="flex gap-3 p-6 justify-end">
      <Button action={cancel}>Cancel</Button>
      <Button primary submit>Save</Button>
    </footer>
  </form>
</Modal>
