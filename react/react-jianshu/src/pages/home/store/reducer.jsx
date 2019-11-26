import { fromJS } from 'immutable'
import * as constants from './constant'
const defaultState = fromJS({
  topicList: []
})

function homeReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge(
        {
          topicList: fromJS(action.topicList),
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList),
        })
    default:
      return state
  }
}

export default homeReducer