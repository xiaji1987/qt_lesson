import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 纯函数
// let c = 10
// let map = new Map();
// function add (a, b) {
//   let key = JSON.stringify(Array.from(arguments))
//   if(map.get(key)) return map.get(key)
//   let res = a + b
//   map.set(key, res)
//   return res
// }
// add(1, 2) // 13
// c = 20
// add(1, 2) // 33
// function reduce(c, d) {
//   return c - d
// }
// 高阶函数: 函数是一等功名

// function merorize(fn) {
//   let map1 = new Map()
//   if(map1.get())
// }