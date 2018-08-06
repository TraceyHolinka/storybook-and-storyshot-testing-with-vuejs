<template>
  <div class="app">
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
export default {
  name: 'app',
  components: {
    TheHeader
  }
}
</script>

<style <style lang="postcss">
@import url(assets/globals.css);
</style>
