<script>
export default {
  props: {
    article: { type: Object, required: true },
    showAuthor: { type: Boolean, required: false, default: true }
  }
}
</script>

<template>
  <article class="article-card">
    <h2>{{ article.title }}</h2>
    <img :src="article.imageUrl">
    <p>{{ article.summary }}</p>
    <p v-if="showAuthor">Author: <router-link :to="{ name: 'author', params: { authorID: article.author.id } }">{{ article.author.name }}</router-link></p>
  </article>
</template>

<style lang="postcss">
.article-card {
  margin: 32px 0;
}
</style>
