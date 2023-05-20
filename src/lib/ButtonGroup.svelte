<script>
    export let groupHover = false;
</script>

<div class={`${groupHover && 'opacity-0 group-hover:opacity-100'}`}>
  <slot/>
</div>
