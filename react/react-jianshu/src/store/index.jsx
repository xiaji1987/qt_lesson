import {  createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux-immutable'
import homeReducer from '../pages/home/store/reducer'
import headerReducer from '../common/header/store/reducer'
import thunk from 'redux-thunk'

// {home: }
const reducer = combineReducers({
  home: homeReducer,
  header: headerReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

// export default
// import ... from './index'
export default store