import Router from 'vue-router'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
      },
      {
        path: '/author/:authorId',
        name: 'author',
        component: () => import('../views/Author')
      },
      {
        path: '/:articleId',
        name: 'article',
        component: () => import('../views/Article')
      }
    ]
  })
}
