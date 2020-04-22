function transfor(arr) {
  let root = new Node(arr[0].id)
  let node = root
  let map = new Map
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i].id, arr[i].children)
  }
  function createObj(node) {
    let child = map.get(node.id)
    if(!child) return
    let childsArr = []
    for (let i = 0; i < child.length; i++) {
      let childNode = new Node(child[i])
      childsArr.push(childNode)
      createObj(childNode)
    }
    node.children = childsArr
  }
  createObj(node)
  return root
}

function Node(id) {
  this.id = id
  this.children = null
}

let arr = [
  {
    id: 'A',
    children: ['B', 'C', 'E'], // 根节点
  },
  {
    id: 'B',
    children: ['D'],
  }
]

console.log(transfor(arr))