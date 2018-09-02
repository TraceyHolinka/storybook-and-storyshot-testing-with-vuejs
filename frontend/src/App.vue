<template>
  <div id="app" class="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="postcss">
@import url(assets/globals.css);
</style>
