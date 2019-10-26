## 预编译 四部曲 发生在函数执行之前啊
1. 创建AO对象
2. 找形参和变量声明， 将变量声明和形参作为AO属性名， 值为undefined
3. 将实参和形参值统一
4. 在函数体里找函数声明，将函数声明作为AO对象属性名，值赋予函数体

AO {
  a: undefined, -> a: 1, -> a: function () {}
  b: undefined -> b: undefined
  d: function () {}
}

与编译完成后

AO {
  a: function () {} -> 123 
  b: undefined -> function () {}
  d: function () {}
}

console.log的最终结果
AO {
  a: 123 
  b: function () {}
  d: function () {}
}