柯里化

编写函数 校验电话号码 或邮箱

通用函数有好处 接受n个参数 每一次返回一个函数
可以裂变？
checkCellPhone = checkByRegExp(/1[3-9]\d{9}/);
checkEmai; = checkByRegExp(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/);

checkCellPhone('12345678910');

js的函数式编程

- 返回函数，每次只接受一个参数
- 返回的函数运行， 闭包， 最初的参数的数量， 最后的参数是， 运行完成， 否则 继续返回函数

- 分函数收集参数的过程
  return function() {} 闭包 

- require + module.exports es5 模块化的