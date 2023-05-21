<script>
	export let showModal = false;

	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
  class="rounded-xl shadow-xl p-0"
>
	<div on:click|stopPropagation class="divide-y">
    <slot/>
	</div>
</dialog>
