
<script>
import gql from 'graphql-tag'
import AuthorBio from '../components/AuthorBio.vue'
import ArticleList from '../components/ArticleList.vue'

export default {
  components: {
    AuthorBio,
    ArticleList
  },
  data() {
    return {
      authorId: this.authorId
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
          id: this.$route.params.authorId
        }
      }
    }
  }
}
</script>

<template>
  <div>
    <AuthorBio
      v-if="author"
      :id="author.id"
      :name="author.name"
      :avatar-url="author.avatarUrl"
      :bio="author.bio"/>
    <ArticleList
      v-if="author && author.articles"
      :articles="author.articles"
      :show-author="false"
      :title="`Articles by ${author.name}`"
      v-bind="$attrs"/>
  </div>
</template>
