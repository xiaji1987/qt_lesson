import { fromJS } from 'immutable'
import * as constants from './constant'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: 1
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
    case constants.ADD_ARTICLE_LIST:
      return state.merge(
        {
          articleList: state.get('articleList').concat(fromJS(action.list)),
          articlePage: action.nextPage
        })
    default:
      return state
  }
}

export default homeReducer