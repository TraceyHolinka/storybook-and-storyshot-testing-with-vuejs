<script>
export default {}
</script>

<template>
  <div class="colors">
    <div class="block one"/>
    <div class="block two"/>
    <div class="block three"/>
    <div class="block four"/>
    <div class="block five"/>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);
.colors {
  display: flex;

  & .block {
    width: 36px;
    height: 36px;
  }

  & .one {
    background: var(--color-primary);
  }
  & .two {
    background: var(--color-primary-accent);
  }
  & .three {
    background: var(--color-secondary);
  }
  & .four {
    background: var(--color-secondary-accent);
  }
  & .five {
    background: var(--color-background);
  }
}
</style>
