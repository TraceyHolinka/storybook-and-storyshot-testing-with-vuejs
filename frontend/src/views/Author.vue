
<script>
import gql from 'graphql-tag'

export default {
  data () {
    return {
      authorId: 0,
    }
  },
  apollo: {
    author: {
      query: gql`query getAuthor ($id: Int!) {
        author (id: $id) {
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
      }`,
      variables () {
        return {
          id: this.authorId
        }
      }
    },
    authors: gql`query getAuthors {
      authors {
        id
        name
        articles {
          id
          title
          summary
        }
      }
    }`
  }
}
</script>

<template>
  <div>
    <h1>Vue GraphQL Meetup</h1>
    <section v-if="author">
      <label for="author">Select author to view:</label>
      <select v-model="authorId" id="author">
        <option v-for="author in authors" :key="author.id" :value="author.id">{{ author.name }}</option>
      </select>

    </section>
  </div>
</template>

<style>
</style>
