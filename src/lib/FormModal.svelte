<script>
	export let showModal = false;
	export let action = '';
	export let cancel = () => {};

  /** @type {HTMLDialogElement} */
	let dialog;

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => {
		cancel();
		dialog.close();
	}}
  class="rounded-xl shadow-xl p-0"
>
	<div on:click|stopPropagation>
		<form method="POST" action="{action}" class="divide-y">
			<div class="p-6">
				<slot name="body"/>
			</div>
			<footer class="flex gap-3 p-6 justify-end">
				<slot name="footer"/>
			</footer>
		</form>
	</div>
</dialog>
