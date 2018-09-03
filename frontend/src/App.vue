<template>
  <div
    id="app"
    class="app">
    <TheHeader :menu="menu"/>
    <router-view/>
  </div>
</template>

<script>
import menu from './data/menu.json'
import TheHeader from './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
      menu: menu
    }
  }
}
</script>

<style lang="postcss">
@import url(assets/globals.css);
</style>
