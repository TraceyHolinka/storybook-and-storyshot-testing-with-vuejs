import Router from 'vue-router'

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
      }
    ]
  })
}
