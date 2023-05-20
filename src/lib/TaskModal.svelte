<script>
	import { invalidateAll } from '$app/navigation';
  import { showTaskModal, currentProjectId } from '$lib/stores/stores';

  import Modal from "./Modal.svelte";
  import Field from "./Field.svelte";

  let name = '';
  let estimate = '';

  function cancel() {
    name = '';
    estimate = '';
  }

  async function submit() {
    invalidateAll();
    console.log('submit', name, estimate, 'hum', $currentProjectId);
  }
</script>

<Modal bind:showModal={$showTaskModal} action={submit} cancelAction={cancel} actionLabel="Save">
  <Field name="name" label="Task name" bind:value={name}/>
  <Field name="estimate" label="Time estimate" bind:value={estimate}/>
</Modal>
