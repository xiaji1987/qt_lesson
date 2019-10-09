// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import HeaderBar from './components/HeaderBar'
import FooterBar from './components/FooterBar'
import router from './router'
import store from './store/index'

import './styles/index.css'
import './rem'
// function () => {}
// { install:  }
Vue.use((foo) => {
  // foo === Vue
  foo.component('header-bar', HeaderBar),
  foo.component('footer-bar', FooterBar)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
