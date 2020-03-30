function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}

function change() {
  let time = 3000
  let j = 1
  return async function() {
    for (let i = 0; i < j; i++) {
      j++
      if(time == 3000) {
        red()
      }
      if(time == 2000) {
        yellow()
      }
      if(time == 1000) {
        green()
      }
      await wait(time)
      time -=1000
      if(time == 0) {
        time = 3000
      }
    }
  }
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

let res = change()
res()