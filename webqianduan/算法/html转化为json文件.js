const root = '<div><span><a></a></span><span><a></a><a></a></span></div>'

// function walk(node, path, max) {
//   if(!node) {
//     return
//   }
//   path = [...path, node.tagName]
//   max = Math.max(max, node.dataset.v)
//   for(let item of node.children) {
//     walk(item, path, max)
//   }
// }
// walk(root, [], -1);

function getNode(root) {
  let reg = new RegExp(/<([a-z]|\/[a-z])*>/g)
  let Arr = root.match(reg)
  let nodeList = new Node(Arr[0])
  let node = nodeList
  // let newArr = [Arr[0]]
  let regX = new RegExp(/\//)
  Arr.shift()
  function createObj(node) {
    let temp = Arr.shift()
    if(Arr.length <= 0) {
      return
    }
    if (regX.test(temp)) {
      createObj(node)
    } else {
      // newArr.push(temp)
      let nodeChild = new Node(temp)
      if (node.children == null) {
        node.children = [nodeChild]
      } else {
        node.children.push(nodeChild)
      }
      createObj(node.children)
    }
  }
  createObj(node)
  return nodeList
}

function Node(tag) {
  this.tag = tag
  this.children = null
}

console.log(getNode(root))