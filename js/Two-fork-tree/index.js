var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 前序遍历: [1, 2, 4, 3, 5, 7, 8, 6]
// var preOrder = function (node) {
//   if(node) {
//     console.log(node.value)
//     preOrder(node.left)
//     preOrder(node.right)
//   }
// }

// preOrder(tree)

// 深度优先，非递归, 栈
// var preOrderUnrecur = function (node) {
//   if(!node) {
//     throw new Error("Empty Tree")
//   }
//   var stack = [] //栈
//   stack.push(node)
//   while (stack.length !== 0) {
//     node = stack.pop()
//     console.log(node.value)
//     if(node.right) {
//       stack.push(node.right)
//     }
//     if(node.left) {
//       stack.push(node.left)
//     }
//   }
// }

// preOrderUnrecur(tree)

// 广度优先，非递归, 栈
var BreadthFirstUnrecur = function (biTree) {
  let queue = []
  queue.push(biTree)
  while (queue.length != 0) {
    let node = queue.shift()
    console.log(node.value)
    if(node.left) {
      queue.push(node.left)
    }
    if(node.right) {
      queue.push(node.right)
    }
  }
}

BreadthFirstUnrecur(tree)