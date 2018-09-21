
<script>
import gql from 'graphql-tag'
import Article from '../components/Article.vue'

export default {
  components: {
    Article
  },
  data() {
    return {
      articleId: this.articleId
    }
  },
  apollo: {
    article: {
      query: gql`
        query getArticle($id: Int!) {
          article(id: $id) {
            id
            title
            imageUrl
            body
            postedDate
            author {
              id
              name
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.articleId
        }
      }
    }
  }
}
</script>

<template>
  <Article 
    v-if= "!!article"
    :article="article"/>
</template>
