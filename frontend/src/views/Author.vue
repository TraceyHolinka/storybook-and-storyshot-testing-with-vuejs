
<script>
import gql from 'graphql-tag'
import Author from '../components/Author.vue'

export default {
  components: {
    Author
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
    <Author
      v-if="author"
      :author="author"
      v-bind="$attrs"/>
  </div>
</template>
