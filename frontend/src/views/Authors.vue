
<script>
import gql from 'graphql-tag'

export default {
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
              summary
              imageUrl
            }
          }
        }
      `,
      variables() {
        return {
          id: this.authorId
        }
      }
    },
    authors: gql`
      query getAuthors {
        authors {
          id
          name
          articles {
            id
            title
            summary
          }
        }
      }
    `
  }
}
</script>

<template>
  <div>
    <section v-if="author">
      <label for="author">Select author to view:</label>
      <select
        id="author"
        v-model="authorId">
        <option
          v-for="author in authors"
          :key="author.id"
          :value="author.id">
          {{ author.name }}
        </option>
      </select>

      <h2>Author: {{ author.name }}</h2>
      <div>
        <h2>Articles</h2>
        <div v-if="author.articles && author.articles.length">
          <div
            v-for="article in author.articles"
            :key="article.id"/>
        </div>
        <div v-else>
          This author has written no articles
        </div>
      </div>
    </section>
  </div>
</template>
