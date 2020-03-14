hash路由
浏览器中符号'#' #后面的字符称为hash,用window.location.hash读取
hashchange
特点: 会出现在URL中，但不会包括在http，对后端没有影响，因此不会重新加载页面

URL的hash值(#后面的值)只是客户端的一种状态，也就是说当向服务器大气请求时，hash部分不会被发送

hash的只改变是，都会子啊浏览器上增加一个记录，因此我们通过回退前进按钮纽之hash的切换

可以通过a标签，并设置href属性，当用户点击标签后，URL的hash值会发生变化或者使用JavaScript对loaction.hash进行赋值，改变URL的hash值

我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）

history路由
history采用html5新特性，
pushState() replaceState()
前者是增加一个历史纪录，后者直接替换当前的历史纪录

pushState和replaceState两个API来实现URL的变化
我们可以利用popstate事件监听utl的变化，对页面进行跳转
history.pushState()和history.replaceState不会触发popstate是阿锦，这是我们需要手动触发页面添砖(渲染)

history模式下，url必须与后端url请求一致