<template>
  <div id="app">
    <h1>Vue GraphQL Meetup</h1>
    <section v-if="author">
      <label for="author">Select author to view:</label>
      <select v-model="authorId" id="author">
        <option v-for="author in authors" :key="author.id" :value="author.id">{{ author.name }}</option>
      </select>

      <h2>Author: {{ author.name }}</h2>
      <div>
        <button @click="setAuthorName(author.id, 'Michael Bloomberg')">Change name to Michael Bloomberg</button>
      </div>

      <div>
        <h2>Articles</h2>
        <div v-if="author.articles && author.articles.length">
          <div v-for="article in author.articles" :key="article.id">
            <h3>{{ article.title }}</h3>
            <img :src="article.imageUrl" />
            <p>{{ article.summary }} </p>
            <p>Author: {{ article.author.name }}</p>
          </div>
        </div>
        <div v-else>
          This author has written no articles
        </div>
      </div>
    </section>

    <!-- <hr/> -->

    <!-- <div>
      <h2>Articles</h2>
      <div v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>{{ article.summary }} </p>
        <p>Author: {{ article.author.name }}</p>
      </div>
    </div> -->

    <!-- <hr/> -->

    <!-- <div>
      <h2>Authors</h2>
      <div v-for="author in authors" :key="author.id">
        <h3>{{ author.name }}</h3>
        <button @click="setAuthorName(author.id, 'Michael Bloomberg')">Change name to Michael Bloomberg</button>
      </div>
    </div> -->
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'app',
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
          articles {
            id
            title
            summary
            imageUrl
            author {
              id
              name
            }
          }
        }
      }`,
      variables () {
        return {
          id: this.authorId
        }
      }
    },
    articles: gql`query getArticles {
      articles {
        id
        title
        summary
        author {
          id
          name
          articles {
            id
            title
            summary
          }
        }
      }
    }`,
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
  },
  methods: {
    setAuthorName (id, name) {
      this.$apollo.mutate({
        mutation: gql`mutation setAuthorName($id: Int!, $name: String!) {
          setAuthorName(id: $id, name: $name) {
            id
            name
          }
        }`,
        variables: {
          id, 
          name
        }
      })
    }
  }
}
</script>

<style>
#app {
  max-width: 480px;
  margin: 24px auto 0;
  padding: 0 16px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

hr {
  margin: 48px 0;
}

h1, h2 {
  font-weight: 500;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
