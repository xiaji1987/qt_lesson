import * as types from '../types'

const state = {
  showSideBar: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSideBar = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

const getters = {
  showSidebar: state => state.showSideBar
}

export default {
  state,
  mutations,
  actions,
  getters
}