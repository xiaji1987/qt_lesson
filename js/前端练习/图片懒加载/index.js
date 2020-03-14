function loadImages() {
  // 获得视窗的高度
  var seeHeight = document.documentElement.clientHeight;
  // 获得当前向上滚动的距离
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  var images = document.getElementsByTagName('img');
  for(let i = 0; i < images.length; i ++){
    // 元素距离顶部的距离<视窗的高度+滚的距离时，说这个元素已经被滑到或者被滑过了，给他替换成本来的图片
    if(images[i].offsetTop < seeHeight + scrollTop){
      images[i].src = images[i].getAttribute('data-src');
    }
  }
  console.log(seeHeight,scrollTop)
}
// 一开始调用一下，在触发scroll之前
loadImages();          //初始化首页的页面图片
window.addEventListener('scroll', loadImages)
