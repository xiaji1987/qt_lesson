import React from 'react';
// React.createElement
import ReactDom from "react-dom";

let cursor = 0;
let currentComponent = {
  _hook: []
}
const argsHasChanged = (oldArgs, args) => {
  return !oldArgs || args.some((arg, i) => 
  {
    return oldArgs[i] !== arg
  })
}
function getHookstate(i) {
  const hooks = currentComponent._hook;
  if (i >= hooks.length) {
    hooks.push({});
  }
  return hooks[i];

}
function myUseState(initState) {
  const hooks = getHookstate(cursor++);
  hooks._value = [
    hooks._value ? hooks._value[0] : initState,
    function setState(newState) {
      hooks._value[0] = newState;
      render();
    }
  ]
  return hooks._value;
}
function Couter() {
  const [c, setC] = myUseState(10);
  const [d, setD] = myUseState(10);
  console.log(currentComponent);
  return (
    <div>
      d: { d }
      <button onClick={() => {
        setD(Math.random())
      }}>setD</button>
    </div>
  )
}
render()
function render() {
  cursor = 0;  // 0 ++++++ 
  ReactDom.render(<Couter />, 
    document.getElementById('count'))
}
