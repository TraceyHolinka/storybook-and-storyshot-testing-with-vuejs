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
        <ArticleCard v-for="article in articles" :key="article.id" :article="article"/>
      </section>
      <section v-else>
        <p>There are no articles</p>
      </section>
  </div>
</template>
<style>
</style>

<style>
</style>
