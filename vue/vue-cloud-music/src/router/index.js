import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/pages/Search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
