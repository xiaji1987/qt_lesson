// flexiable.js 移动端适配的库
// rem -> html fs
(function(win, doc) {
  const cal = function () {
    const w = doc.documentElement.clientWidth;
    // 宽度 375 的设备
    doc.documentElement.style.fontSize = 100 * (w / 375) + 'px'
    doc.body.style.fontSize = '16px'
  }
  cal();
})(window, document)