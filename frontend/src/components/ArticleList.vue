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
  <div class="article-list">
    <h1>{{ title }}</h1>
    <section v-if="articles && articles.length">
      <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :article="article"/>
    </section>
    <section v-else>
      <p>There are no articles</p>
    </section>
  </div>
</template>

<style lang="postcss">
@import url(../assets/vars-include.css);
.article-list {
  & h1 {
    @apply --font-twentyfour;
  }
}
</style>
