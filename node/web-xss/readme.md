## XSS
cross site script 跨站脚本攻击
用不合法途径往 web页面插入可执行的代码

攻击类型:
1. 反射性
  XSS 代码存在 url 中， 服务器解析请求， 把XSS 的代码一并返回，
  web网页得到响应，执行XSS，过程向一次反射一样
2. 存储型:
  唯一区别 xss的代码 有没有永久保留在 服务器 (服务器， 文件...)

## 防护
编码 html entity 编码 ， < -> "&lt;" " " -> "&nbsp;"
onError 属性 onCkick
过滤
校正 