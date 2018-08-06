
<script>
import gql from 'graphql-tag'
import Home from '../components/Home.vue'

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
    Home
  }
}
</script>

<template>
  <Home :articles="articles"/>
</template>
