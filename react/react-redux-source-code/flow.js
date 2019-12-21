const { createStore } = require('redux')

// 数据的创建和修改
let a = 123
a = 456

function count(state, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1
    default:
      return 0
  }
}

const store = createStore(count)
store.subscribe(() => {
  console.log('数据改变了')
})
store.dispatch({
  type: 'ADD'
})

console.log(store.getState())