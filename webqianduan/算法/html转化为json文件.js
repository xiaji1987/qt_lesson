const root = '<div><span><a></a></span><span><a></a><a></a></span></div>'

function walk(node, path, max) {
  if(!node) {
    return
  }
  path = [...path, node.tagName]
  max = Math.max(max, node.dataset.v)
  for(let item of node.children) {
    walk(item, path, max)
  }
}
walk(root, [], -1);