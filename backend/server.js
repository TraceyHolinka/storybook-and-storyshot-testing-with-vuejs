const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools')

// A simple data model
// Author
// -
// id PK int
// name string

// Article
// -
// id PK int
// title string
// summary string
// body string
// imageUrl string
// authorID int FK >- author.id
const db = require('./database.js')

// The GraphQL schema in string form
const typeDefs = `
  type Article {
    id: Int!
    title: String!
    summary: String
    body: String
    imageUrl: String
    author: Author
  }
  type Author {
    id: Int!
    name: String!
    articles: [Article]
  }
  type Query {
    author (id: Int!): Author
    article (id: Int!): Article
    articles: [Article]
    authors: [Author]
  }
  type Mutation {
    setAuthorName (id: Int!, name: String!): Author
  }
`;

// The resolvers
const resolvers = {
  Article: {
    author: (root) => db.getAuthor(root.authorId)
  },
  Author: {
    articles: (root) => db.getArticlesByAuthor(root.id)
  },
  Query: {
    author: (root, args) => db.getAuthor(args.id),
    article: (root, args) => db.getArticle(args.id),
    articles: () => db.getArticles(),
    authors: () => db.getAuthors()
  },
  Mutation: {
    setAuthorName: (root, args) => db.setAuthorName(args.id, args.name)
  }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

app.use(cors())

app.use('/assets', express.static('assets'))

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!')
})