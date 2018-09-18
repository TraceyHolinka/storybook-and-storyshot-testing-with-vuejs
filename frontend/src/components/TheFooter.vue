<script>
export default {
}
</script>

<template>
  <div class="the-footer">
    <p>
      <router-link
        :to="{ name: 'home'}"
        class="site-title">
        Faker News
      </router-link>
      Storybook and Storyshot Testing Demo by <a href="https://github.com/TraceyHolinka/">Tracey Holinka</a></p>
  </div>
</template>

<style lang="postcss">
.the-footer {
  margin: 24px auto;
}
</style>
