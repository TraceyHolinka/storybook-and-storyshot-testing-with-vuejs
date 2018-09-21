
<!-- Still need to build out -->
<script>
import gql from 'graphql-tag'
import Authors from '../components/Authors.vue'

export default {
  components: {
    Authors
  },
  data() {
    return {
      authorId: 0
    }
  },
  apollo: {
    authors: gql`
      query getAuthors {
        authors {
          id
          name
          bio
          articles {
            id
            title
            postedDate
          }
        }
      }
    `
  }
}
</script>

<template>
  <Authors
    v-if="!!authors"
    :authors="authors"/>
</template>
