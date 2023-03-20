import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import SignInView from './views/SignInView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: '/'
    },
    {
      component: SignInView,
      path: '/signin',
      props: {
        message: 'Sign In'
      }
    }
  ]
})
