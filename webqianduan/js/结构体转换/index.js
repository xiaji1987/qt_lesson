let arr = [
  {
    id: 'A',
    children: ['B', 'C', 'E'], // 根节点
  },
  {
    id: 'B',
    children: ['D'],
  },
]

function getRoot(arr) {
  let newArr = []
  let node = {
    id: '',
    children: []
  }
  for (let i = 0; i < arr.length; i++) {
    node.id = arr[i].id || arr[i]
    for (let i = 0; i < arr[i].length; i++) {
      
    }
  }
  return newArr
}

console.log(getRoot(arr))