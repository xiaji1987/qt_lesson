let file = document.getElementById('file')
function base() {
  file.addEventListener('change', function () {
    let that = this
    cutImage(that)
  })
}

function cutImage(ele) {
  // console.log(ele)
  let file = ele.files[0]
  if(file == undefined) {
    return
  }
  let render = new FileReader()
  // console.log(render)
  render.readAsDataURL(file)
  console.log(render)
  render.onload = function(event) {
    let base64 = event.target.result
    let bili = 1.5
    suofang(base64, bili)
  }
}

function suofang(base64, bili) {
  let img = new Image()
  console.log(img)
  img.src = base64
  img.onload = function () {
    let canvas = document.createElement('canvas')
    let width = this.width / bili
    let height = this.height / bili
    canvas.setAttribute('width', width)
    canvas.setAttribute('height', height)
    canvas.getContext('2d').drawImage(this, 0, 0, width, height)
    let imgBase64 = canvas.toDataURL('image/jpeg')
    console.log(imgBase64)
  }
}

base()