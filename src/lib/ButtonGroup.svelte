<script>
    export let groupHover = false;
</script>

<div class={`flex ${groupHover && 'opacity-0 group-hover:opacity-100'}`}>
  <slot/>
</div>
