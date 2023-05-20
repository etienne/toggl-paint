<script>
	import { invalidateAll } from '$app/navigation';
  import { showTaskModal, currentProjectId, me } from '$lib/stores/stores';

  import Modal from "./Modal.svelte";
  import Field from "./Field.svelte";

  let name = '';
  let estimate = '';

  function cancel() {
    name = '';
    estimate = '';
  }

  async function submit() {
    const taskResponse = await fetch(`/api/workspaces/${$me.default_workspace_id}/projects/${$currentProjectId}/tasks`, {
      method: 'POST',
      body: JSON.stringify({
        active: true,
        estimated_seconds: +estimate * 3600,
        name,
        project_id: $currentProjectId,
        workspace_id: $me.default_workspace_id,
      })
    });
    const taskData = await taskResponse.json();
    $showTaskModal = false;
  }
</script>

<Modal bind:showModal={$showTaskModal} action={submit} cancelAction={cancel} actionLabel="Save">
  <Field long name="name" label="Task name" bind:value={name}/>
  <Field short name="estimate" label="Estimate" bind:value={estimate}>
    <span slot="after" class="text-gray-400 ml-1">hours</span>
  </Field>
</Modal>
