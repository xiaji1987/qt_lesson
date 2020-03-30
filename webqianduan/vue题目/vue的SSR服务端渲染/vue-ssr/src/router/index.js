import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const __import__ = file => () => import(`@/components/${file}.vue`)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/comp1'
    },
    {
      path: '/comp1',
      name: 'comp1',
      component: __import__('comp1')
    },
    {
      path: '/comp2',
      name: 'comp2',
      component: __import__('comp2')
    }
  ]
})
