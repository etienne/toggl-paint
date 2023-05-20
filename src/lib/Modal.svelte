<script>
	import Button from "./Button.svelte";

	export let showModal = false;
  export let action = () => {};
  export let actionLabel = '';
  export let cancelAction = () => {};

	let dialog; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();

  function cancel() {
    cancelAction();
    dialog.close();
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<div on:click|stopPropagation>
		<slot />
    <footer>
      <Button action={cancel}>Cancel</Button>
      {#if actionLabel}
        <Button bind:action>{actionLabel}</Button>
      {/if}
    </footer>
	</div>
</dialog>
