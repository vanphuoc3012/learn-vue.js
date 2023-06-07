import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/messageFeed',
      name: 'messageFeed',
      component: () => import('../views/MessageFeed.vue')
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue')
    }
  ]
})
const beforeEachCallBack = (to, from, next) => {
  if (to.name === 'about' && (!to.query?.user)) {
    next({ name: 'error' })
  } else {
    next()
  }
}

router.beforeEach(beforeEachCallBack)

export default router
