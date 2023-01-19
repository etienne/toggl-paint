<div>
  <slot></slot>
</div>

<style>
  div {
    display: flex;
    background-color: #eee;
    border-radius: 0.5rem;
    padding: 0.2rem;
  }

  div > :global(*) {
    background-color: transparent;
    padding-block: 0.6rem;
  }
</style>
