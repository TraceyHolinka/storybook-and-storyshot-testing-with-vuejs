<script>
export default {}
</script>

<template>
  <div class="the-header">
    <!-- eslint-disable-next-line vue/max-attributes-per-line -->
    <svg class="hamburger-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M5 24h22v2H5zM5 15h22v2H5zM5 6h22v2H5z"/></svg>
    <router-link
      :to="{ name: 'home'}"
      class="site-title">
      Faker News: The Real Fake News</router-link>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);
.the-header {
  display: flex;
  align-items: flex-start;
  height: auto;

  & .hamburger-icon {
    width: 36px;
    height: 36px;
    padding: 8px;
  }

  & .site-title {
    color: var(--color-3);
    @apply --font-thirtysix;
    font-weight: bold;
  }
}
</style>
