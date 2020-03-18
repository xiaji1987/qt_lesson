function Ajax(url, method, param={}) {
  return new Promise((resolve, reject) => {
    const xhr = new XHRHttpResquest()
    if (method == "GET" && params) {
      let paramString = paramFunc(param)
      url += url.indexOf('?') == -1 ? `?${paramString}` : paramString
    }
    xhr.open(method, url)
    if (method == 'POST') {
      xhr.send(param)
    } else {
      xhr.send()
    }
    xhr.onload = function () {
      const res = {
        status: xhr.status,
        statusText: xhr.statusText,
        header: xhr.getAllResponseHeaders,
        data: xhr.response || xhr.responseTxet
      }
      if ((xhr.status >= 200 && xhr <= 300) || xhr == 304) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }
    xhr.onerror = function() {
      reject(new Error('请求出错了'))
    }
    xhr.timeout = function () {
      reject(new Error('请求超时'));
    }
    xhr.onabort = function () {
      reject(new Error('请求被终止'));
    }
  })
}

function paramFunc(param) {
  let res = ''
  param.forEach(ele => {
    res += ele
  })
  return res
}



function Ajax(url, method, params) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpResquest
    if(method == 'GET' && params) {
      let res = getParams(params)
      url += url.indexOf('?') == -1 ? `?${res}` : res
    }
    xhr.open(mehtod, url)
    if(mehtod == 'POST') {
      xhr.send(params)
    } else {
      xhr.send()
    }
    xhr.onload = function () {
      const res = {
        status: xhr.status,
        data: xhr.response || xhr.responseTxet
      }
      if ((xhr.status >= 200 && xhr <= 300) || xhr == 304) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }
    xhr.onerror = function() {
      reject(new Error('请求出错了'))
    }
    xhr.timeout = function () {
      reject(new Error('请求超时'));
    }
    xhr.onabort = function () {
      reject(new Error('请求被终止'));
    }
  })
}

function getParams(params) {
  let res = ''
  params.forEach(parma => {
    res += parma
  })
  return res
}