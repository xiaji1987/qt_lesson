const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';

const isBalanced = (str) => {
  // [{()}]
  // es6 新增的数据结构 hashMap 映射
  const map = new Map([
    ["{","}"],
    ["(",")"],
    ["[","]"]
  ]);
  // console.log(map.get("{"));
  // for(let [key,val] of map) {
  //   console.log(key,val);
  // }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let node = str[i];
    // 入栈
    // 出栈
    if(map.has(node)) {
      stack.push(node);
    } else if ([...map.values()].includes(node)){
      // 右边 value之中的一个 跟栈顶的元素匹配
      // key value 反找key
      let key = stack[stack.length - 1];
      if (map.get(key) != node) {
        return false;
      }
      stack.splice(stack.length-1,1);
    }
  }
  return stack.length === 0;
}
console.log(isBalanced(expression));