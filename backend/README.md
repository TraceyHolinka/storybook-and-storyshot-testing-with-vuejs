# Backend

## Database schema

```
Author
-
id PK int
name string
avatarUrl string
bio string

Article
-
id PK int
title string
summary string
body string
imageUrl string
postedDate string
authorId int FK >- Author.id
```

## Build Setup

```bash
# install dependencies
yarn install

# serve graphql at localhost:3000
node server

# go to http://localhost:3000/graphiql to run queries!
```

You have to restart the server yourself when you make changes.

## Graphiql

Go to http://localhost:3000/graphiql to run queries!
