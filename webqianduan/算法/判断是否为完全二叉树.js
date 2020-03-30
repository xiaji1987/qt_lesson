function check(root) {
  let arr = [root]
  let flag = false
  while(arr.length > 0) {
    let len = arr.length
    for (let i = 0; i < len; i++) {
      let node = node.shift()
      if(node == null) {
        flag = true
      } else {
        if(flag) return false
        arr.push(node.left)
        arr.push(node.right)
      }
    }
  }
  return true
}