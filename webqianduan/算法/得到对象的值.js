const o = {
  a:{
    b:{
      c:1
    }
  },
  b: {
    c: 2
  }
}

function get(obj, str) {
  let mykey = str.match(/[a-z]{1,}/)[0]
  str = str.replace(mykey, '')
  // console.log(mykey)
  Object.keys(obj).forEach(key => {
    if(mykey == key) {
      let newObj = obj[key]
      // console.log(newObj)
      if(newObj instanceof Object) {
        // console.log(newObj)
        get(newObj, str)
      } else  {
        console.log(newObj)
        return
      }
    }
  })
}

get(o, 'b.c')

let div = '<div id="container" class="main"></div>'
let reg = new RegExp(/id=".*?"/)
let id = div.match(reg)[0]
console.log(id)