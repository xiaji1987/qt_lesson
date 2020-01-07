import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from './react-redux';


function reducers (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state // 没有修改，返回原来的对象
  }
}

const store = createStore(reducers);
// store.getState() 获取state
// store.dispatch()
// store.subscribe()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

