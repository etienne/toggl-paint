<div>
  <slot></slot>
</div>

<style>
  div {
    display: flex;
    background-color: #eee;
    border-radius: 0.4rem;
    padding: 1px;
    width: fit-content;
  }

  div > :global(*) {
    background-color: transparent;
    padding-block: 0.6rem;
  }
</style>
