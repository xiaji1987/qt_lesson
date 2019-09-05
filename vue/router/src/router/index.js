import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'
import Look1 from '@/components/Look1'
import Look2 from '@/components/Look2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look',
      name: 'Look',
      component: Look,
      children: [
        {
          path: '/look/look1',
          name: 'Look1',
          component: Look1
        },
        {
          path: '/look/look2',
          name: 'Look2',
          component: Look2
        }
      ]
    },
    {
      path: '/go-back',
      redirect: '/'
    }
  ]
})
