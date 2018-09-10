<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  components: {
    ArticleCard
  },
  props: {
    articles: { type: Array, required: true },
    title: { type: String, required: false, default: 'Recent Faker News' }
  }
}
</script>

<template>
  <section class="article-list">
    <h1 class="heading">{{ title }}</h1>
    <section v-if="!!articles.length">
      <ArticleCard
        v-for="article in articles"
        v-bind="$attrs"
        :key="article.id"
        :article="article"/>
    </section>
    <section v-else>
      <p>There are no articles</p>
    </section>
  </section>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);

.article-list {
  & .article-card:first-of-type {
    margin-top: 24px;
  }

  & .heading {
    @apply --font-thirty;
    text-align: center;
    color: var(--color-secondary-accent);
  }
}
</style>
