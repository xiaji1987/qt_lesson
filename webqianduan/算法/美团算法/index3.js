let x = 10
let k = 3

function getXNum(x, k) {
  let countNum = x
  for (let i = x; i >= 0; i--) {
    let powNum = 0
    let bugNum = 0
    console.log(Math.floor(x / Math.pow(k, powNum)))
    while (Math.floor(x / Math.pow(k, powNum)) != 0) {
      powNum++
      bugNum -= Math.floor(x / Math.pow(k, powNum))
      console.log(i, bugNum)
      if (bugNum <= 0) {
        countNum = i
        break
      }
    }
  }
  console.log(countNum)
}
getXNum(x, k)