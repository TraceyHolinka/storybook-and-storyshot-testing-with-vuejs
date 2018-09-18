<script>
import menu from './data/menu.json'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      menu: menu
    }
  }
}
</script>

<template>
  <div
    id="app"
    class="app">
    <TheHeader :menu="menu"/>
    <router-view/>
    <TheFooter/>
  </div>
</template>

<style lang="postcss">
@import url(assets/globals.css);
</style>
