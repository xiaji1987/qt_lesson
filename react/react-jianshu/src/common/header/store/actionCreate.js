import * as CONTANTS from './constants'
export const searchFocus = (focus) => {
  return {
    type: CONTANTS.SEARCH_FOCUS,
    focus: focus
  }
}