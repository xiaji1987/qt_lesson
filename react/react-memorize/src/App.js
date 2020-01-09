import React, { useState, 
  useMemo, 
  useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

// React.memo   // 缓存组件
// shouldComponetUpdate
function Count(props) {
  const [val, setVal] = useState(0);
  console.log('render');
  const calc = useMemo(() => {
    console.log('calc');
    return 10 + val;
  }, [ val ])
  const calc1 = useCallback(() => {
    console.log('calc');
    return 10 + val;
  }, [ val ])
  // useMemo 会 第二个参数/数组 前后两个浅比较
  // 如果数组没有变化 会从缓存里面取值

  // useCallback 缓存 函数
  return (
    <h3>
      { props.count }
      { calc }
      <button onClick={() => {
        setVal(Math.random())
      }}>button</button>
    </h3>
  )
}
const Count1 = React.memo(Count, (thisProps, 
  nextProps) => {
    return false;
});
// 
// 默认 把 thisprops nextProps 浅比较 
// 比较 两个对象相不相等的一个函数
// PureComponent  state/props 之间的 浅比较

class Abc extends React.PureComponent {}  
class Abc1 extends React.Component {}  

function App() {
  const [ count, setCount ] = useState(0);
  console.log(123)
  return (
    <div className="App">
      <button onClick={() => {
        setCount(Math.random());
      }}>update count</button>
      <Count1 count={100} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
