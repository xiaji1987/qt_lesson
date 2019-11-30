import { fromJS } from 'immutable'
import * as CONSTANTS from './constants'

const defaultState = fromJS({
  login: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case CONSTANTS.CHANGE_LOGIN_STATUS:
      
      return state.set('login', action.status)
    default:
      return state
  }
}