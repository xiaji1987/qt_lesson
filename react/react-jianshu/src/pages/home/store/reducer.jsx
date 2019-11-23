import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: []
})

function homeReducer(state, action) {
  switch (action.type) {
    case '':
      return ''
    default:
      return defaultState
  }
}

export default homeReducer