function Ajax(method, url, params = []) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpResquest()
    if(method == 'GET') {
      let query = getQuery(params)
      url += url.indexOf('?') < 0 ? `?${query}` : query
    }
    xhr.open(method, url)
    if(method == 'POST') {
      xhr.send(params)
    } else {
      xhr.send()
    }
    xhr.onload = function () {
      let resilt = {
        status: xhr.status,
        data: xhr.respose || xhr.resposeText
      }
      if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
        resolve(resilt)
      } else {
        reject(result)
      }
    }
  })
}

function getQuery() {
  let res = ''
  params.forEach(param => {
    res += param
  })
  return res
}