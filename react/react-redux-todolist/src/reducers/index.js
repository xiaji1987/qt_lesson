const defaultList = [
  {
    complete: false,
    content: 'eat'
  }
]

function todolist(state, action) {
  // 返回值决定store 是什么样的
  switch (action.type) {
    case 'ADD-TODO':
      return [
        ...state, 
        {
          content: action.content,
          complete: false
        }
      ]
    default:
      return defaultList
  }
}

export default todolist