<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  props: {
    articles: {type: Array, required: true }
  },
  components: {
    ArticleCard
  }
}
</script>
<template>
    <div>
      <h1>Recent Faker News</h1>
      <section v-if="articles && articles.length">
        <div v-for="article in articles" :key="article.id">
          <ArticleCard :article="article"/>
        </div>
      </section>
      <section v-else>
        This author has written no articles
      </section>
  </div>
</template>
<style>
</style>
