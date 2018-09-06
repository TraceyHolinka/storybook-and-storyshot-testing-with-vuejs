<script>
export default {
  props: {
    authors: { type: Array, required: true }
  }
}
</script>

<template>
  <div
    v-if="!!authors"
    class="authors">
    <header>
      <h1 class="heading">Authors</h1>
    </header>
    <section
      v-for="author in authors"
      :key="author.id">
      <h2>{{ author.name }}</h2>
      <p v-if="!!author.bio">{{ author.bio }}</p>
      <div>
        <h2>Articles</h2>
        <div v-if="author.articles">
          {{ author.articles }}
          <div
            v-for="article in author.articles"
            :key="article.id"/>{{ article.title }}
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);
.authors {
  & .heading {
    @apply --font-thirty;
    text-align: center;
    color: var(--color-secondary-accent);
  }
}
</style>
