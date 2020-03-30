function myInstanceof(left, right) {
  if (typeof left !== 'object' || left == null) return false

  let proto = Object.getPrototypeOf(left)
  while(true) {
    if (proto == null) {
      return false
    } else if (proto == right.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

var obj = {}
console.log(myInstanceof(obj, Array))

// function instan(left, right) {
//   if (typeof left != 'Object' || left == null) return 
//   let proto = Object.getPrototypeOf(left)
//   while(true) {
//     if (proto == null) return false
//     else if (proto == right.prototype) return true
//     proto = Object.getPrototypeOf(proto)
//   }
// }

// function myInstanceod(left, right) {
//   if (typeof left !== 'object') {
//     return
//   }
//   let proto = Object.getPrototypeOf(left)
//   while(true) {
//     if(proto == null) {
//       return false
//     }
//     else if (proto == right.prototype) {
//       return true
//     }
//     proto = Object.getPrototypeOf(proto)
//   }
// }

// function myinstanceof(left, right) {
//   if(typeof left != 'object' || left == null || right) {
//     return
//   }
//   let proto = Object.getPrototypeOf(left)
//   while(true) {
//     if(proto == null) {
//       return false
//     } else if (proto == right.prototype) {
//       return true
//     }
//     proto = Object.getPrototypeOf(proto)
//   }
// }


function newinstanceof(left, right) {
  // if(left == null || left)
  let proto = Object.getPrototypeOf(left)
  while(true) {
    if(proto == null) {
      return false
    }
    if(proto == right.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}

console.log(newinstanceof([], Array))

function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left)
  while(true) {
    if(proto == null) {
      return false
    } else if(proto == right.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
}