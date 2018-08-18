import Vue from 'vue'
import App from './App.vue'
import VueApollo from 'vue-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createRouter } from './router'
import VueRouter from '../node_modules/vue-router'

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:3000/graphql'
})

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

// plugins must be registered in order
Vue.use(VueRouter)
Vue.use(VueApollo)

const router = createRouter()
const apolloProvider = new VueApollo({ defaultClient: apolloClient })

new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  render: h => h(App)
})