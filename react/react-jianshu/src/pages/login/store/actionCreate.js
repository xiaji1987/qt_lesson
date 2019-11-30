import * as CONSTANTS from './constants'

export const changeLoginStatus = (status) => {
  return {
    type: CONSTANTS.CHANGE_LOGIN_STATUS,
    status: status
  }
}