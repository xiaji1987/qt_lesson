let k = 3
let map = new Map()
function getWay(k) {
  if(k == 2) return 3
  if(map.has(k)) {
    return map.get(k)
  }
  let res = getWay(k -1) * 2
  map.set(k, res)
  return res
}

console.log(getWay(k))