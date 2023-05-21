<script>
  export let action = () => {};
  export let submit = false;
</script>

<button class="w-full hover:bg-gray-100 text-left p-2" type={submit ? 'submit' : 'button'} on:click={action}>
  <slot/>
</button>
