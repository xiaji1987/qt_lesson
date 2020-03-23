function getUrlParams(url, key) {
  console.log(url)
  let obj = {}
  let index = url.indexOf('?')
  if(index < 0) {
    return obj
  }
  let params = url.substring(index + 1, url.length)
  let arr = params.split('&')
  for (let item of arr) {
    let keyValue = item.split('=')
    obj[keyValue[0]] = keyValue[1]
  }
  console.log(obj)
}

getUrlParams('http://127.0.0.1:8080/index?userName=123&password=6345')