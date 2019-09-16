import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: ratings
    }
  ]
})
