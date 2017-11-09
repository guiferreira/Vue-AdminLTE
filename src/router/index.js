import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/page/Home'
import Contato from '@/page/Contato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato
    }
  ]
})
