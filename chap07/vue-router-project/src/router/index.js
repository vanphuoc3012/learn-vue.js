import { createRouter, createWebHistory, useRoute } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import messages from '@/assets/messages'

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
      component: () => import('../views/AboutView.vue'),
      props: (route) => ({ user: route.query.user || 'Phuoc' })
    },
    {
      path: '/messageFeed',
      name: 'messageFeed',
      component: () => import('../views/MessageFeed.vue'),
      props: (route) => ({
        messages: route.query.messages?.length > 0 ? route.query.messages : []
      }),
      beforeEnter: async (to, from, next) => {
        if (!to.query || !to.query.messages) {
          const module = await import('../assets/messages.js')
          const messages = module.default
          console.log(messages)
          if (messages && messages.length > 0) {
            to.query.messages = messages
          }
          console.log(to.query.messages)
        }
        next()
      }
    },
    {
      path: '/error',
      name: 'error',
      component: () => import('../views/Error.vue')
    },
    {
      path: '/message/:id',
      name: 'message',
      component: () => import('../views/Message.vue'),
      props: (route) => ({
        id: route.params.id,
        content: route.query.content
      }),
      beforeEnter: async (to, from, next) => {

        next()
      },
      children: [
        {
          path: 'author',
          name: 'messageAuthor',
          props: true,
          components: () => import('../views/MessageAuthor.vue')
        },
        {
          path: 'info',
          name: 'messageInfo',
          props: true,
          component: () => import('../views/MessageInfo.vue')
        }
      ]
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserView.vue'),
      props: true,
      children: [
        {
          path: 'info',
          name: 'userInfo',
          component: () => import('../views/UserInfo.vue'),
          props: true
        },
        {
          path: 'extra',
          name: 'userExtra',
          component: () => import('../views/UserExtra.vue')
        }
      ]
    }
  ]
})
// const beforeEachCallBack = (to, from, next) => {
//   if (to.name === 'about' && (!to.query?.user)) {
//     next({ name: 'error' })
//   } else {
//     next()
//   }
// }
//
// router.beforeEach(beforeEachCallBack)

async function beforeEnterMessage(to, from, next) {
  if (to.params && to.params.id) {
    const id = to.params.id
    console.log(id)
    const module = await import('../assets/messages.js')
    console.log(module)
    const messages = module.default
    console.log(messages)
    if (messages && messages.length > 0 && id < messages.length) {
      console.log('=====')
      to.query.content = messages[id]
      console.log(to.query.content)
    }
  }
}
export default router
