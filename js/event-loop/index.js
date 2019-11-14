// setTimeout(function (aegument) {
//   console.log('111111111')
// })
// console.time('test')
// for (let index = 0; index < 1000000; index++) {
//    index === 1
// }
// console.timeEnd('test')

// console.log('2222');

// 1. js引擎线程 
// 2. GUI线程 
// 3. http网络请求线程(处理用户的get, post等请求，等到返回结果后将回调函数推到任务队列)
// 4. 定时器触发器线程(settimeout, 等待时间结束把执行推入到任务队列)
// 5. 浏览器事件处理线程

function test1 () {
  test2()
  console.log('1111');
}
function test2 () {
  console.log('2222');
}
function main () {
  console.log('main');
  setTimeout(() => {
    console.log('setTimeout');
  }, 0);
  test1()
}
main()

// step1: main()先执行，进入线程，进入执行栈打印'hello, I am main'
// step2: 遇见setTimeout，将回调函数放入任务队列，
// step3: main调用test1，test1进入到stack中被执行
// step4: test1执行，调用test2（test2进入到stack中被执行）
// step5: test2执行，打印'hello, I am test2'
// step6: console.log('hello, I am test1')
// step7: 主线程执行完毕，进入任务队列当中执行

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
// 不可变
// 默认值 reducer -store
// 后续 dispatch -> action - reducer -store
function discuss(state, action) {
  switch (action.type) {
    case 'PUSH_DIS':
      return [
        ...state,
        action.content
      ]
    default:
      return []
  }
  // return [];
}
const store = createStore(discuss);
setInterval(() => {
  store.dispatch({
    type: 'PUSH_DIS',
    content: '评论一'
  })
}, 1000)
class List extends React.Component {
  render() {
    return (
      <div>
        {
          store.getState().map((dis) => {
            return (
              <li>{ dis }</li>
            )
          })
        }
      </div>
    )
  }
}
store.subscribe(() => {
  ReactDOM.render(<List />, 
    document.getElementById('root'));
})
ReactDOM.render(<List />, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

