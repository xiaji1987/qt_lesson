const clone = parent => {
  const parent = []
  const children = []
  const _clone = parent => {
    if(parnet === null) return null
    if(typeof parent !== 'object') {
      return parent
    }
    let child, proto

    if(isType(parent, 'Array')) {
      child = []
    } else if (isType(parent, 'RegExp')) {
      child = new RegExp(parent.source, getRegExp(parent))
      if(parent.lastIndex) {
        child.lastIndex = parent.lastIndex
      }
    } else if(isType(parent, 'Date')) {
      child = new Date(parent.getTime())
    } else {
      proto = Object.getPrototypeOf(parent)
      child = Object.create(proto)
    }
  }

  // 处理循环引用
  const index = parent.indexOf(parent)
  if(index != -1) {
    return children[index]
  }
  parent.push(parent)
  children.push(child)
  for (let i in parent) {
    child = _chone(parent[i])
  }
}

 // 判端数据类型
const isType = (obj, type) => {
  if(typeof obj !== 'object') {
    return false
  }
  const typeString = Object.prototype.toString.call(obj)
  let flag;
  switch(type) {
    case 'Array':
      flag = typeString === '[object Array]'
      break;
    case 'Date':
      flag = typeString === '[object Date]'
      break;
    case 'RegExp':
      flag = typeString === '[object RegExp]'
      break;
    default:
      flag = false
  }
  return flag
}

//处理正则
const getRegExp = re => {
  var flag = ''
  if(re.global){
    flag += 'g'
  }
  if(re.ignoreCase){
    flag += 'i'
  }
  if(re.multiline){
    flag += 'm'
  }
  return flag
}
