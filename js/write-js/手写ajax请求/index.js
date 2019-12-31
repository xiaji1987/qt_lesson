let xhr = new XMLHttpRequest()

// 初始化
xhr.open(method, url, async)

// 发送请求
xhr.send(data)
// 设置状态变化回调处理请求结果


//readyState
// 0：未初始化，但是已经创建了XHR实例
// 1：调用了open()函数
// 2：已经调用了send()函数，但还未收到服务器回应
// 3：正在接受服务器返回的数据
// 4：完成响应

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}

// ajax
// ajax({
//   method: 'get',
//   url: 'www.baidu.com',
//   type: 'jsonp',
//   data: {
//    currentPage: 1,
//    total: 10
//   },
//   timeout: 10000
// })
function ajax(options) {
  // 请求地址
  const url = options.url
  const method = options.method.toLocaleLowerCase() || 'get'

  // 默认异步为true
  const async = options.async

  // 请求参数
  const data = options.data

  const xhr = new XMLHttpRequest()

  // 请求超时
  if (options.timeout && options.timeout > 0) {
    xhr.timeout = options.timeout
  }

  // 返回一个promise实例
  return new Promise((resolve, reject) => {
    xhr.ontimeout = () => reject && reject('请求超时')

    // 监听状态变换回调
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        // 200 ~ 300
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          resolve && resolve(xhr.responseText)
        } else {
          reject && reject()
        }
      }
    }

    // 错误回调
    xhr.onerror = err => reject && reject(err)
    let paramArr = []
    let encodeData

    // 处理请求参数
    if (data instanceof Object) {
      for (let key in data) {
        // 参数拼接要通过 encodeURIComponent 进行编码
        paramArr.push(encodeURIComponent(key)+ '=' +encodeURIComponent(data[key]))
      }
      encodeData = paramArr.join('&')
    }


    // get请求拼接参数
    if (method === 'get') {
      const index = url.indexOf('?')
      if (index === -1) url += '?'
      else if (index !== url.length-1) url += '&'
      // 拼接url
      url += encodeData
    }


    xhr.open(method, url, async)

    if (method === 'get') xhr.send(null) 
    else {
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencodeed;charset=UTF-8')
      xhr.send(encodeData)
    }
  })
}
