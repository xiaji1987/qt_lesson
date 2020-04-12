let num = 5
let startPeople = [1, 2, 3, 4, 5]
let endPeople = [2, 4, 5, 1, 3]

function getCount(num, startPeople, endPeople) {
  if(num <= 0) {
    return 0
  }
  let count = 0
  for (let i = 0; i < endPeople.length; i++) {
    let endArr = endPeople.slice(i + 1, endPeople.length)
    let indexS = startPeople.indexOf(endPeople[i])
    let startArr = startPeople.slice(0, indexS + 1)
    for (let item of endArr) {
      if(startArr.includes(item)) {
        count++
        break
      }
    }
  }
  console.log(count)
}

getCount(num, startPeople, endPeople)
