function Ajax(mehtod, url, params) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    if(mehtod == 'get') {
      let res = getQueue(params)
      url += url.split('').indexOf('?') < 0 ? `?${res}` : res
    }
    xhr.open(mehtod, url)
    if(url == 'post') {
      xhr.send(params)
    } else {
      xhr.send()
    }
    xhr.onload = function () {
      let res = {
        status: xhr.status,
        data: xhr.response || xhr.responseText
      }
      if((res.status >= 200 && res.status < 300) || res.status == 304) {
        resolve(res.data)
      } else {
        reject()
      }
    }
  })
}

function getQueue(params) {
  let res = ''
  params.forEach(key => {
    res += params[key]
  })
  return res
}