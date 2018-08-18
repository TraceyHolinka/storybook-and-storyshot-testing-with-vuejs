
<script>
import gql from 'graphql-tag'
import ArticleList from '../components/ArticleList.vue'

export default {
  components: {
    ArticleList
  },
  data() {
    return {
      authorId: 0
    }
  },
  apollo: {
    author: {
      query: gql`
        query getAuthor($id: Int!) {
          author(id: $id) {
            id
            name
            avatarUrl
            bio
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
          }
        }
      `,
      variables() {
        return {
          id: this.authorId
        }
      }
    }
  }
}
</script>

<template>
  <ArticleList
    :articles="author.articles"
    :show-author="false"
    :title="`Articles by ${author.name}`"
    v-bind="$attrs"/>
</template>
