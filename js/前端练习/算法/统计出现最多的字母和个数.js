const str = 'bvakushfuiahfdsgjnshpofuihhgsadbvkjashuighfsdgfdhbsjvbkjdfhui'

function getMax(str) {
  str = str.split('')
  let map = {}
  for (let item of str) {
    map[item] ? map[item] += 1 : map[item] = 1
  }
  let index = null
  let max = 0
  Object.keys(map).forEach(key => {
    index = max > map[key] ? index : key
    max = max > map[key] ? max : map[key]
  })
  console.log(index, max)
}

getMax(str)