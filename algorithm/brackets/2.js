const expression = '{{}}{}{}';
const expressionFalse = '{}{{}';
function isBalanced(exp) {
  let info = exp.split(''),
      stack = [];// push pop
  console.log(info);
  for (let i = 0; i < info.length; i++) {
    let el = info[i];
    if(el == "{") {
      stack.push(el);
    } else if(el == "}"){
      if(stack.length === 0){
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}
console.log(isBalanced(expressionFalse));