import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { func } from 'prop-types';

let _state
function myUseState(initState) {
  _state = _state || initState
  function setState(newState) {
    _state = newState
    // 重新渲染
    render()
  }
  return [_state, setState]
}



let _deps = {
  args: []
}

function myUseEffect(cb, args) {
  const hasChange = args && args.some((arg, index) => {
    return arg !== _deps.args[index]
  })
  if(hasChange || !_deps.args) {
    cb()
    _deps.args = args
  }
}

let _depsMemo = {
  args: null,
  value: null
}

function myUseMemo(cb, args) {
  const hasChange = args && args.some((arg, index) => {
    return _depsMemo.args && arg !== _depsMemo.args[index];
  })
  if (hasChange || !_depsMemo.args) {
    _depsMemo.value = cb();
    _depsMemo.args = args;
    return _depsMemo.value
  }
  return _depsMemo.value
}

function myUseCallBack(cb, args) {
  return myUseMemo(() => {})
}

function Counter() {
  const [ count, setCount ] = myUseState(0)

  myUseEffect(() => {
    console.log(' did count ')
  }, [])

  console.log(count)

  let res = myUseMemo(() => {
    return count + 1
  }, [count])
  return (
    <>
      count: {count}
      res: {res}
      <button onClick={() => {
        setCount(Math.random())
      }}>change count</button>
    </>
  )
}
render()
// ReactDOM.render(<Counter />, document.getElementById('root'));

function render() {
  ReactDOM.render(<Counter />, document.getElementById('root'));
}
// 数组 链表
// 第一次渲染:
// [{_state: 0}, {_dep: {args}, {_deps: {args, value}}}]

// 第二次渲染: 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
