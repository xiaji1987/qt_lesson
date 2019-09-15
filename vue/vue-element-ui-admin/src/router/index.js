import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/pages/MainContent'
import Home from '@/pages/Home'
import EventContent from '@/pages/Event/create'
import EventList from '@/pages/Event/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {
        name: '首页'
      },
      component: MainContent,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '/event',
      meta: {
        name: '活动'
      },
      component: MainContent,
      children:[
        {
          path: '/',
          redirect: 'create',
          meta: {
            hidden: true
          }
        },
        {
          path: 'create',
          meta: {
            name: '创建'
          },
          component: EventContent,
        },
        {
          path: 'list',
          meta: {
            name: '管理'
          },
          component: EventList,
        }
      ]
    }
  ]
})
