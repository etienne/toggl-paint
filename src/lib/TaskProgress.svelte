<script>
  export let total = 0;
  export let current = 0;

  let currentHours = Math.round(current / 3600);
  let totalHours = Math.round(total / 3600);
  let extraHours = 0;
  let remainingHours = 0;

  if (currentHours > totalHours) {
    extraHours = currentHours - totalHours;    
  } else {
    remainingHours = totalHours - currentHours;
  }
</script>

<ul>
  {#each {length: extraHours ? totalHours : currentHours} as h}
    <li class="completed"></li>
  {/each}

  {#each {length: extraHours} as h}
    <li class="completed extra"></li>
  {/each}

  {#each {length: remainingHours} as h}
    <li></li>
  {/each}
</ul>

<style>
  ul {
    display: flex;
    gap: 1px;
    align-items: center;
  }

  li {
    width: 2px;
    height: 2px;
    margin-block: 4px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  li.completed {
    height: 8px;
  }

  li.extra {
    background-color: red;
  }
</style>
