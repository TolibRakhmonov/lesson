import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./components/home')
    },
    {
      path: '/users/:id',
      component: () => import('./components/users'),
    },
    {
      path: '/posts',
      component: () => import('./components/posts')
    },
    {
      path: '/posts/:id',
      component: () => import('./components/post')
    },
    {
      path: '/albums',
      component: () => import('./components/albums')
    },
    {
      path: '/albums/:id',
      component: () => import('./components/photo')
    },
    {
      path: '/todos',
      component: () => import('./components/todos')
    }

  ]
});



export default router