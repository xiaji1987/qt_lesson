import Vue from 'vue'
import Router from 'vue-router'
import vue from '@/components/vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vue',
      component: vue
    }
  ]
})
