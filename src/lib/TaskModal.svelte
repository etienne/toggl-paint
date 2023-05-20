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
    console.log('submit>');
    try {
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
    } catch (error) {
      console.error(error);
    }
  }
</script>

<Modal bind:showModal={$showTaskModal} action={submit} cancelAction={cancel} actionLabel="Save">
  <Field name="name" label="Task name" bind:value={name}/>
  <Field name="estimate" label="Time estimate" bind:value={estimate}/>
</Modal>
