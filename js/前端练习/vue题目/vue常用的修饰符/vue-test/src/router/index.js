import Vue from 'vue'
import Router from 'vue-router'
import table from '@/components/table'
import event from '@/components/event'
import mouse from '@/components/mouse'
import key from '@/components/key'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: table
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/event',
      name: 'event',
      component: event
    },
    {
      path: '/mouse',
      name: 'mouse',
      component: mouse
    },
    {
      path: '/key',
      name: 'key',
      component: key
    }
  ]
})
