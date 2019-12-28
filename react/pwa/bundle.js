document.getElementById('app').innerText = '46号图片'

setTimeout(() => {
  fetch('http://rap2api.taobao.org/app/mock/240109/redux/todolist').then(res => {
    return res.json()
  }).then(res => {
    console.log(res)
  })
}, 3000)