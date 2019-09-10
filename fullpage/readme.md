- css 处理
  - 某个盒子里的所有子元素占据一页
  - 事件 onscroll 很多次， 节流
  - transform transition
  - 面向对象

- jquery API
  $(fn) 原生js也是有生命周期的，我们叫他事件
  JS是基于事件的脚本语言 找对的生命周期
  $('.container')querySelector方法
  typeof 参数 function 走分支
  .find()查找 querySelector
  .css(cssname, val) .height()

  VUE 统统没有
  VUE MVVM 尽量减少DOM编程， querySelector ....
  css DOM的查找， 执行， 都是要花很多内存， VUE可以优化它

  VUE 生命周期 js 事件
  <template>
    <div :width="width">
      {{content}}
    </div>
  </template>
  可以减少DOM操作,
