import Vue from 'vue'
import Vuex from 'vuex'

// Vue prototype vuex功能？
// 借 mapAction mapGetters this.$route this.$store
Vue.use(Vuex)

const state = {
  count: 0 // 状态树里的状态
}

const mutations = {
  // 修改状态
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions
})