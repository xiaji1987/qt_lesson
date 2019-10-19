import * as api from '../api'

export const getAllMessages = ({commit}) => {
  api.getAllMessages(messages => {
    commit('receiveAll', messages)
  })
}

export const sendMessage = ({commit}, payload) => {
  
}

export const switchThread = ({ commit }, payload) => {
  setCurrentThread(state, id);
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}
