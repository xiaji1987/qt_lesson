详情见当前文件夹下的vue-test
表单修饰符
1. .lazy 延迟执行onchange事件
<div>
  <input type="text" v-model.lazy="value">
  <p>{{value}}</p>
</div>

2. .trim 去掉首尾的空格，中间不能过滤
<input type="text" v-model.trim="value">

3. .number 
你先输入数字，那么输出的就是数字，字母之后都不会显示
你先输入字符串，他想当每家number

事件修饰符
4. .stop
阻止冒泡时间

5. .prevent
相当于event.preventDefault()方法。
组织默认事件

6. .self
只触发自己

7. .once
点击只触发一次

8. captrue
事件从外到内

9. .passive
在滚轮事件中加上了.lazy的效果

10. .native

11. .left / .right / .middle
鼠标的左中右点击事件

12. keyCode
当按下某一个键会触发
