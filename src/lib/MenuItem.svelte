<script>
  export let action = () => {};
</script>

<li>
  <button class="w-full hover:bg-gray-100 text-left p-2" on:click={action}>
    <slot/>
  </button>
</li>
