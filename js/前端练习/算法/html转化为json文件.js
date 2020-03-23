const root = '<div><span><a></a></span><span><a></a><a></a></span></div>'

function Dom2JSON(root) {
  let node = {
    tag: '',
    children: []
  }
  let arr = root.split('><')
  arr[0] = arr[0].substring(1)
  arr[arr.length - 1] = arr[arr.length - 1].substring(0, arr[arr.length - 1].length - 1)
  console.log(arr)
  let quene = []
  let result = node
  while(quene) {
    quene
  }
  return
}

console.log(Dom2JSON(root))