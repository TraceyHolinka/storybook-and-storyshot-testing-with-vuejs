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
      Faker News: The Real Fake News
    </router-link>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);
.the-header {
  display: flex;
  margin-bottom: 24px;

  & .hamburger-icon {
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    margin-right: 24px;
    fill: var(--color-primary-accent);
  }

  & .site-title {
    color: var(--color-primary);
    @apply --font-thirtysix;
    font-weight: bold;
  }
}
</style>
