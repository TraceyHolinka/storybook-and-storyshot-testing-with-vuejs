<template>
  <div
    id="app"
    class="app">
    <slot/>
  </div>
</template>

<script>
/*
   This must be here due to an issue with jest-vue-preprocessor.
   Without this it will fail to serialize this component and any associated unit tests will fail
   https://github.com/vire/jest-vue-preprocessor/issues/49
*/
export default {}
</script>

<style lang="postcss">
@import url(../assets/globals.css);
.app {
  margin-bottom: 24px;
}
</style>
