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
    <div class="avatar-wrapper">
      <Avatar
        v-if="!!showAvatar"
        class="avatar"/>
    </div>
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

  & .name,
  & .avatar-wrapper,
  & .bio {
    @apply --4-column-grid-all-columns;
  }

  & .name,
  & .avatar-wrapper {
    @apply --grid-hort-center;
  }

  & .name {
    -ms-grid-row: 1;
    grid-row: 1;
    @apply --grid-hort-center;
    margin-bottom: 24px;
    @apply --font-thirty;
  }

  & .avatar-wrapper {
    -ms-grid-row: 2;
    grid-row: 2;
    margin-bottom: 16px;
  }

  & .avatar {
    max-width: 150px;
    width: 100%;
    max-height: 150px;
    height: auto;
    border-radius: 75%;
    background: var(--color-primary);
    fill: var(--color-background);
    stroke: var(--color-background);
  }

  & .bio {
    -ms-grid-row: 3;
    grid-row: 3;
    @apply --font-sixteen;
  }
}
</style>
