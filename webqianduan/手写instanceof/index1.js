function newinstanceof(left, right) {
  if(typeof left != 'object' || left == null) return false
  let proto = Object.getPrototypeOf(left)
  while(true) {
    if(proto == null) return false
    else if(proto == right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}