<script>
import Avatar from './Avatar.vue'

export default {
  components: {
    Avatar
  },
  props: {
    id: { type: Number, requried: true, default: null },
    name: { type: String, requried: true, default: null },
    avatarUrl: { type: String, requried: false, default: null },
    bio: { type: String, requried: true, default: null },
    showAvatar: { type: Boolean, requried: false, default: true }
  }
}
</script>

<template>
  <section class="author-bio">
    <h1 class="name">{{ name }}</h1>
    <Avatar
      v-if="!!showAvatar"
      class="avatar"/>
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
    padding-bottom: 6px;
    border-radius: 75%;
    background: var(--color-primary);
    fill: var(--color-background);
    stroke: var(--color-background);
  }

  & .bio {
    -ms-grid-column: 3;
    -ms-grid-column-span: 7;
    grid-column: 3 / span 7;
    @apply --font-sixteen;
  }

  & .avatar,
  & .bio {
    -ms-grid-row: 2;
    grid-row: 2;
    @apply --grid-vert-center;
  }
}
</style>
