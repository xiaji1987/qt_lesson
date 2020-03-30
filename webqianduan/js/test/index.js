function A(name) {
  this.name = name;
}

A.prototype.log = function(time) {
  return function() {
    console.log('123')
  }
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

A.log(200)