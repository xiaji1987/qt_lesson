const _XMLHttpRequest = window.XMLHttpRequest
// window.XMLHttpRequest.protorype.onreadystatechange

function XMLHttpRequest() {
  const xhr = new _XMLHttpRequest()
  function statechange() {
    if(xhr.readyState === 4) {
      console.log('请求成功了')
    }
  }
  xhr.addEventListener('timeout')
  xhr.addEventListener('error')
  xhr.addEventListener('readystatechange', statechange)
  return xhr
}