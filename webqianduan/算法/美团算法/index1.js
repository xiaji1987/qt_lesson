let week = 3
let time = '02:10'
let minute = 9
function getNum(week, time, minute) {
  let timeArr = time.split(':')
  let hour = 0
  let minu = 0
  let countMinu = parseInt(timeArr[0]) * 60 + parseInt(timeArr[1])
  if(minute > countMinu) {
    week -= 1
    if(week == 0) {
      week = 7
    }
    minute -= countMinu
  }
  hour = Math.ceil(minute / 60)
  minu = minute % 60
  console.log(week, `${24 - hour}:${60 - minu}`)
}
getNum(week, time, minute)