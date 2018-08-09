
<script>
import gql from 'graphql-tag'
import ArticleList from '../components/ArticleList.vue'

export default {
  apollo: {
    articles: gql`query getArticles {
      articles {
        id
        title
        imageUrl
        summary
        postedDate
        author {
          id
          name
        }
      }
    }`
  },
  components: {
    ArticleList
  }
}
</script>

<template>
  <ArticleList :articles="articles"/>
</template>
