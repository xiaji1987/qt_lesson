import * as types from '../types'
import {findIndex} from '../../common/util'
const state = {
  playList: [],
  currentIndex: -1,
  playing: false,
  currentSong: ''
}

const mutations = {
  [types.SET_PLAYLIST] (state, playList) {
    state.playList = playList
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING] (state, status) {
    state.playing = status
  }
}

const actions = {
  selectPlaySong ({commit, state}, song) {
    let playlist = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表是否有待插入的歌曲并返回其索引
    let fpIndex = findIndex(playlist, song)
    // 如果已经包含这首歌
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playlist = [...playlist, song]
      currentIndex = playlist.length - 1
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_PLAYING, true)
  },
  addPlayList ({commit, state}, song) { // 加入播放列表
    let playlist = [...state.playList.slice(), song]
    if (playlist.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_PLAYING, true)
  }
}

const getters = {
  playList: state => state.playList,
  playing: state => state.playing
}

export default {
  state,
  mutations,
  actions,
  getters
}
