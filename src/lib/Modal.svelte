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
  class="rounded-xl shadow-xl p-0"
>
	<div on:click|stopPropagation class="divide-y">
    <div class="p-6">
      <slot />
    </div>
    <footer class="flex gap-3 p-6 justify-end">
      <Button action={cancel}>Cancel</Button>
      {#if actionLabel}
        <Button primary bind:action>{actionLabel}</Button>
      {/if}
    </footer>
	</div>
</dialog>
