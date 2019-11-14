# 浏览器渲染的过程
1. 解析html, 生成Dom树，生成cssom树
2. 将Dom树和cssom树结合，生成渲染树 (render tree)
3. 回流，根据生成的渲染树进行回流，得到节点的几何信息(位置，大小)
4. 重塑，根据渲染树和几何信息，得到节点绝对像素
5. 把像素发给GPU, 展示在页面上

# 何时执行回流重塑
1. 添加或删除可见Dom元素
2. 当元素的位置和大小发生变化的时候 (包括内容改变造成容器变化)
3. 浏览器窗口大小发生改变
4. 页面初次渲染

## 回流一定会触发重塑，重塑不一定会触发回流

# 强制队列刷新
  offsetTop、offsetLeft、offsetWidth、offsetHeight
  scrollTop、scrollLeft、scrollWidth、scrollHeight
  clientTop、clientLeft、clientWidth、clientHeight
  getComputedStyle()
  getBoundingClientRect

# 如何减少回流重回流量的次数
1. 使用元素脱离文档流
2. 对其进行对此修改
3. 将元素待会文档流中

# 让Dom脱离文档流的 3 种方式
1. 隐藏元素
2. 使用文档片段(document fragment) 在当前的的Dom之外构建一个字树 再把它拷贝到文档
3. 将原始元素拷贝到脱离文档流的，修改节点后，再替换原始元素