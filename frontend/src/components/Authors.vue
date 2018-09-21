<script>
import Author from './Author.vue'

export default {
  components: {
    Author
  },
  props: {
    authors: { type: Array, required: true }
  }
}
</script>

<template>
  <div
    class="authors">
    <header>
      <h1 class="heading">Authors</h1>
    </header>
    <div
      v-for="author in authors"
      :key="author.id">
      <Author :author="author"/>
    </div>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);
.authors {
  padding: 0 16px;

  & .heading {
    margin-bottom: 30px;
    @apply --font-thirty;
    text-align: center;
    color: var(--color-secondary-accent);
  }

  & div:not(:first-of-type) .author {
    margin-top: 48px;
  }

  & .article-list {
    & .heading {
      @apply --font-twentyfour;
      text-align: left;
    }

    & .article-card {
      margin: 0;
    }
  }
}
</style>
