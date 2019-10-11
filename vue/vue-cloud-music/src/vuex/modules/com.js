import * as types from '../types'

const state = {
  showSideBar: false,
  fullScteen: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSideBar = status
  },
  [types.SET_FULL_SCREEN] (state, status) {
    state.fullScteen = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  selectPlaySong ({commit}, status) {
    commit(types.SET_FULL_SCREEN, status)
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
