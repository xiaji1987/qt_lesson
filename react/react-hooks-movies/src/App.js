import React, { useMemo, useState, useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// 包装地狱 wrapper hell
// class App  extends React.Component {}
// react-xxx(reactRouter(connect(App)))

// 所有的hooks都已use开头
// use

let set1 = new Set()
let set2 = new Set()

function App() {
  // state = {count: 0}
  let [count, setCount] = useState(0)
  let [time, setTime] = useState(0)

  // let calculate = count + ',' + time
  let calculate = useMemo (() => count + ',' + time, [count])

  let fn1 = () => count + ',' + time
  // memorize
  let fn2 = useCallback(() => count + ',' + time, [count])
  set1.add(fn1)
  set2.add(fn2)
  useEffect(() => {
    console.log(123)
    return () => {
      // unMount 卸载
      // 每次组件重新渲染 都会 执行
      console.log('卸载')
    }
  })
  return (
    <div>
      <div>count: {count}</div>
      <div>time: {time}</div>
      <div>calculate: {calculate}</div>
      <div>{set1.size} vs {set2.size}</div>
      <button onClick={() => {
        setCount(++count)
      }}>count ++</button>
      <button onClick={() => {
        setTime(Date.now())
      }}>time change</button>
    </div>
  )
}

export default App;
