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

<style>
	dialog {
    margin: auto;
		max-width: 32rem;
		border-radius: 0.5rem;
		border: none;
		padding: 0;
	}

  dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}

  dialog > div {
		padding: 1em;
	}

  dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

  footer {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    align-items: end;
  }

  @keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}

  dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}

  @keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>