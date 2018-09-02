<script>
export default {
  props: {
    id: { type: Number, requried: true, default: null },
    name: { type: String, requried: true, default: null },
    avatarUrl: { type: String, requried: true, default: null },
    bio: { type: String, requried: true, default: null }
  }
}
</script>

<template>
  <section class="author-bio">
    <h1 class="name">About {{ name }}</h1>
    <img
      :src="avatarUrl"
      class="avatar">
    <p class="bio">{{ bio }}</p>
  </section>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);

.author-bio {
  @apply --grid;
  @apply --4-column-grid;
  -ms-grid-rows: auto;
  grid-template-rows: auto;

  & .name {
    @apply --4-column-grid-all-columns;
    -ms-grid-row: 1;
    grid-row: 1;
    margin-bottom: 24px;
    @apply --font-thirty;
  }

  & .avatar {
    -ms-grid-column: 1;
    grid-column: 1;
    max-width: 150px;
    width: 100%;
    max-height: 150px;
    height: auto;
    border-radius: 100%;
  }

  & .bio {
    -ms-grid-column: 3;
    -ms-grid-column-span: 7;
    grid-column: 3 / span 7;
  }

  & .avatar,
  & .bio {
    -ms-grid-row: 2;
    grid-row: 2;
    @apply --grid-vert-center;
  }
}
</style>
