## 强缓存
http1.1 cache-control: 相对的 + 1h
http1.0 expires: 固定的时间 8:00
请求: 不发起, 走缓存

服务: etag: '123'
请求: if-none-match: '123'

服务: last-modified: 2018:12:11
请求: if-modified-since: 2018:12:11

## 协商缓存
1. a.js
2. 服务: etag: '123' md5(a.js)
3. 后续请求: if-none-match: '123'
4. 服务端判断
  1. req.headers[if-none-match] ?== md5(a.js)
  2. == 304
  3. !== 200 a.js
文件的hash值: md5
同样的输入同样的输出: 

服务: last-modified: 208:12:11
请求: if-modified-since: 2018:12:11
文件最后修改时间

console.log(123);
// 7: 30

## GUP
translate3D 开启 GPU 加速
step:
1. html 解析 dom 树
2. css -> cssom
3. 渲染树 render tree
4. layout 布局
5. paint 绘制
6. compoise 合成

js -> layout -> paint -> compoise
layout: 重排
paint: 重绘

重绘不一定引起重排
重排一定会引起重绘

都是: 针对元素所在当前这一个层的

layout: 大小，位置, top, left, bottom
paint: color shadow...
composite: transform opacity 发生变化的元素必须在一个  合成层 上面

# 提升层的方式：
1. 3d transform
2. will-change
3. css3: animation transition 开始的时候
4. backface-visiablity: hidden
5. video

# 提升层的好处:
元素变化只会影响当前这一个层