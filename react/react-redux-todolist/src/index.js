import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer from './reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer) // 创建store reduce => store

ReactDOM.render(
  // provider 组件中所有组件都可以获取到store -> 全局变量
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
