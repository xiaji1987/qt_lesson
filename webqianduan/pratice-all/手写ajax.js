function myAjax(method, url, params) {
  return new Promise((resolve, reject) => {
    let XML = new XMLHttpRequest
    if(method == 'Get') {
      let qurey = getQurey(params)
    }
  })
}

function getQurey(params) {
  let res = ''
  Object.keys(params).forEach((key, i) => {
    res += key + '=' + params[key] + '&'
  })
  return res
}