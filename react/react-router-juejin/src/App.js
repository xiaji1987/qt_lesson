import React from 'react';
import reactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore } from 'redux'
import Layout from './Layout'
import './App.css';

function reducer (state, actions) {
  if(!state) {
    return {
      count: 4
    }
  }
  const { count } = state
  if (actions.type === 'ADD') {
    return {
      count: count + 1
    }
  }
  if (actions.type === 'SUB') {
    return {
      count: count - 1
    }
  }
}

const store = createStore(reducer)


class Couter extends React.Component {
  add = () => {
    store.dispatch({
      type: 'ADD'
    })
  }
  del = () => {
    store.dispatch({
      type: 'SUB'
    })
  }
  render () {
    console.log('count', store.getState())
    return (
      <div>
        count: {store.getState().count}
        <button onClick={this.add}>+</button>
        <button onClick={this.del}>-</button>
      </div>
    )
  }
}
store.subscribe(() => {
  reactDom.render(<Couter/>, document.getElementById('root'))
})
reactDom.render(<Couter/>,
  document.getElementById('root'))

// 一切皆组件
// react-router 1. dom 2. native 3. 内存
class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Route path="/" component={Layout}></Route>
      </BrowserRouter>
    )
  }
}

export default App;
