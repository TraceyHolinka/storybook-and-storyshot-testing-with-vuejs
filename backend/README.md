# vue-graphql-meetup-backend

> Vue GraphQL Meetup Backend

## Database schema
https://app.quickdatabasediagrams.com/#/schema/smfxviNho0mTmN8rJ7kuDQ

```
Author
-
id PK int
name string

Article
-
id PK int
title string
summary string
body string
imageUrl string
authorId int FK >- Author.id
```

## Build Setup
``` bash
# install dependencies
yarn # or npm install

# serve graphql at localhost:3000
node server

# go to http://localhost:3000/graphiql to run queries!
```

You have to restart the server yourself when you make changes.

## Graphiql
Go to http://localhost:3000/graphiql to run queries!
