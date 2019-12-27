import { combineReducers } from 'redux-immutable'
// import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../application/recommend/store/index'

/**
 * redux-immutable combineReducers reducer 是immutable 结构的
 */

export default combineReducers({
  recommend: recommendReducer
})