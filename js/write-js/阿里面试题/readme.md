# 1.请列举7种以上常用的HTML标签，说明其语义。
1. div 块级元素 用来存放
2. p 块级元素
3. h1 h2 
4. img
5. form
6. ul 
7. span 行内元素
8. a

# 2.请说明下面各种情况的执行结果，并注明产生对应结果的理由。
function doSomething() {
    alert(this);
}
① element.onclick = doSomething，点击element元素后。 
② element.onclick = function() {doSomething()}， 点击element元素后。
③ 直接执行doSomething()。

[1. element object, 函数赋值方式导致this执向element]
[2. window object, this是写在doSomething这个函数里面的, 这种方式的事件绑定并没有将element对象传递给this (在函数点用的模式下this会被绑定到全局对象上)]
[3. window object, doSomething在window中被调用, this指向window]

# 3. 请用JavaScript语言实现 sort 排序函数，要求：sort([5, 100, 6, 3, -12]) // 返回 [-12, 3, 5, 6, 100]。如果你有多种解法，请阐述各种解法的思路及优缺点。（仅需用代码实现一种解法，其它解法用文字阐述思路即可）
function sort(Arr) {

}

# 4. 请根据下面的HTML和CSS代码，画出布局示意图
<div id="page">
    <div class="main">
        <div class="sub"></div>
    </div>
    <div class="nav"></div>
</div>
<style type="text/css">
    #page { width: 520px; border: 1px solid #f35f3e}
    .nav  { width: 200px; float: right; }
    .main { width: 200px; float: left; padding-left: 110px; }    
    .sub  { width: 100px; float: left; margin: 10px 0 10px -100px; }    
    .main { border: 1px solid #000; }
    .nav, .sub { border: 1px dashed #000; height: 300px; }    
    .sub { height: 280px; }
</style>

# 5. 阅读以下JavaScript代码：
if (window.addEventListener) {
    var addListener = function(el, type, listener, useCapture) {
        el.addEventListener(type, listener, useCapture);
    };
} else if (document.all) {
    addListener = function(el, type, listener) {
        el.attachEvent("on" + type, function() {
            listener.apply(el);
        });
    };
}
请阐述 a) 代码的功能; b) 代码的优点和缺点; c) listener.apply(el) 在此处的作用; d) 如果有可改进之处，请给出改进后的代码，并说明理由。

{
  a: 做低版本浏览器的事件注册和兼容
  b: 优点: 跨浏览器 缺点: 
}

# 6.请编写一个JavaScript 函数toRGB，它的作用是转换CSS中常用的颜色编码。 要求：
alert(toRGB("#0000FF"));          // 输出 rgb(0, 0, 255)
alert(toRGB("invalid"));          // 输出 invalid
alert(toRGB("#G00"));              // 输出 #G00

function toRGB(color) {
  var regex = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  match = color.match(regex)
  return match ? 'rgb('+parseInt(match[1], 16)+','+parseInt(match[2], 16)+','+parseInt(match[3], 16)+')' : color
}


# 7. 尝试实现注释部分的Javascript代码，可在其他任何地方添加更多代码（如不能实现，说明一下不能实现的原因）：
var Obj = function(msg){
  this.msg = msg;
  this.shout = function() {
      console.log(this.msg);
  }  
  this.waitAndShout = function(){
    //隔五秒钟后执行上面的shout方法
    setInterval(() => {
      this.shout()
    }, 3000)
  }
  this.waitAndShout()
}
Obj('wn')


# 8. 请编写一个JavaScript函数，它的作用是校验输入的字符串是否是一个有效的电子邮件地址。要求： a)   使用正则表达式。 b)   如果有效返回true ，反之为false。

var checkEmail  = function(email){
    var preg = "(^[a-zA-Z]|^[\\w-_\\.]*[a-zA-Z0-9])@(\\w+\\.)+\\w+$"，,
    pregObj  =new RegExp(preg);
    return pregObj.test(email);
}

# 9. 请分别列出HTML、JavaScript、CSS、Java、php、python的注释代码形式。
{
  <!- html ->
  /* css */
  // JavaScript

  /**
  * java
  */

  # php 当行
  /**
  *php
  */

  # python
  " python "
}


# 10. 请用CSS定义p标签，要求实现以下效果: 字体颜色在IE6下为黑色(#000000)；IE7下为红色(#ff0000)；而其他浏览器下为绿色(#00ff00)。

{
  p {
    color: #00ff00;
    _color: #000000;
  }
  *+html p { // ie7
    color: #ff0000
  }
}

# 11. 请编写一个通用的事件注册函数（请看下面的代码）。
function addEvent(element, type, handler)
{
    // 在此输入你的代码，实现预定功能
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) { // IE
      element.attachEvent('on' + type, handler)
    } else {
      element['on'+type] = handler
    }
}


# 17. 请编写一个JavaScript函数 parseQueryString，它的用途是把URL参数解析为一个对象，如：
var url = “http://www.taobao.com/index.php?key0=0&key1=1&key2=2.....”
var obj = parseQueryString(url);
function parseQueryString(args) {
  var str = args.split('?')[1]
  var result = {}
  var temp = str.split('&') // [key0=0, key1=1, ...]
  for(var i = 0; i < temp.length; i++) {
    var temp2 = temp[i].split('=')
    result[temp2[0]] = temp2[1]
  }
  return result
}
alert(obj.key0)  // 输出0

# 18. 请把以下用于连接字符串的JavaScript代码修改为更有效率的方式
var htmlString =
    "<div class=”container”>" + "<ul id=”news-list”>";
for (var i = 0; i < NEWS.length; i++) {
    htmlString += "<li><a href=”"
        + NEWS[i].LINK + ">"
        + NEWS[i].TITLE + "</a></li>";
}
htmlString += "</ul></div>";

# 18. 请根据下面的描述，用JSON语法编写一个对象: “小明今年22岁，来自杭州。兴趣是看电影和旅游。他有两个姐姐，一个叫小芬，今年25岁，职业是护士。还有一个叫小芳，今年23岁，是一名小学老师。”
var person = ?

var person = {
  "name": '小明',
  "from"：'杭州',
  "favorite": ['movie', 'travel'],
  "age": 22,
  "sisters": [
  {
    "name": '小芬',
    "age": 25,
    "job": 'nurse'        
  },
  {
    "name": '小芬',
    "age": 23,
    "job": '小学老师'       
  }
  ]
}