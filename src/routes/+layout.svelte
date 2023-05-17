<div>
  <slot></slot>
</div>

<style>
  div {
    display: grid;
  }

  @media (min-width: 40rem) {
    div {
      grid-template:
        "header header" auto
        "sidebar main" 1fr / 24rem 1fr;
    }
  }
</style>
