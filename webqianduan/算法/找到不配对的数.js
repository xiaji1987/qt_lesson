function getOnly(arrs) {
  let map = {}
  for(let arr of arrs) {
    if(map[arr] == null || map[arr] == true) {
      map[arr] = false
    } else {
      map[arr] = true
    }
  }
  console.log(map)
  for(let item in map) {
    if(map[item] == false) {
      console.log(item)
    }
  }
}

getOnly([1,1,1,2,1,4,2,2,2])