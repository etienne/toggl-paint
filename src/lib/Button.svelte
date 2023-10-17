<script>
  export let action = () => {};
  export let selected = false;
  export let small = false;
  export let primary = false;
  export let submit = false;
</script>

<button
  class={`rounded-md ${primary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-700/5 hover:bg-gray-700/10' } p-2 ${small ? 'px-1' : 'px-4'} ${selected ? 'bg-white shadow-lg' : ''}`}
  on:click|stopPropagation={action}
  type={submit ? 'submit' : 'button'}
>
  <slot></slot>
</button>
