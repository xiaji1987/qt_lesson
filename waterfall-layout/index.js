(function(){
  function waterFall(option) {
    this.container = option.container;
    this.number = option.number; // 一次性渲染多少张图片
    this.width = document.body.clientWidth;
    this.init();
  }
  waterFall.prototype.init = function() {
    const imgList = document.getElementsByTagName('img');
    const perNum = this.getPerNum();
    let heights = [];
    for (let i = 0; i < perNum; i++) {
      heights.push(imgList[i].offsetHeight);
    }
    for (let i = perNum; i < imgList.length; i++) {
      let minIndex = this.getMinIndex(heights);
      // console.log(heights);
      // console.log(minIndex);
      // float
      // position
      // console.log(heights[minIndex])
      imgList[i].style.position = 'absolute';
      imgList[i].style.left = `${imgList[minIndex].offsetLeft}px`;
      imgList[i].style.top = `${heights[minIndex]}px`;
      // 更新高度
      heights[minIndex] += imgList[i].offsetHeight;
    }
    this.heights = heights;
  }
  waterFall.prototype.append = function(frag) {
    const $waterFall = document.getElementById(this.container);
    $waterFall.appendChild(frag);
    const imgList = document.getElementsByTagName('img');
    // console.log(imgList);
    const imgFromFrag = Array.prototype.slice.call(imgList,-20);
    // console.log(imgFromFrag);
    let heights = this.heights;
    for (let i = 0;i < imgFromFrag.length; i++) {
      let minIndex = this.getMinIndex(heights);
      imgFromFrag[i].style.position = 'absolute';
      imgFromFrag[i].style.left = `${imgList[minIndex].offsetLeft}px`;
      imgFromFrag[i].style.top = `${heights[minIndex]}px`;
      // 更新高度
      heights[minIndex] += imgFromFrag[i].offsetHeight;
    }
  }
  waterFall.prototype.getPerNum = function() {
    const imgList = document.getElementsByTagName('img');
    const singleWidth = imgList[0].offsetWidth;
    return Math.floor(this.width/singleWidth);
  }
  waterFall.prototype.getMinIndex = function(heights) {
    const min = Math.min(...heights);
    return heights.indexOf(min);
  }
  window.waterFall = waterFall;
})()
console.log(waterFall)