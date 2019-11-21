const defaultList = [
  {
    name: 'Ipad',
    count: 3,
    price: 2000,
    checked: false
  },
  {
    name: '华为荣耀mate30',
    count: 5,
    price: 5000,
    checked: false
  }
]
function shopCart(state, action) {
  switch (action.type) {
    case 'ToGGLE_CHECKED':
      return state.map((item, index) => {
        if(index === action.index) {
          // return {
          //   ...item,
          //   checked: action.checked
          // }
          item.checked = action.checked
        }
        return item
      })
    case 'DEL':
      return state.filter((item, index) => {
        return index !== action.index
      })
    default:
      return defaultList
  }
}

export default shopCart