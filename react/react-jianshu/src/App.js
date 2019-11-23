import React from 'react'
// 1. history api 2. hash change
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import baseComponent from './lib/baseComponent'
import store from './store/index'
import Home from './pages/home/index'

class App extends baseComponent {
  render () {
    return (
      <Provider store={store}>
        {/* BrowserRouter保存了全局的路由信息 */}
        <BrowserRouter>
          <div>
            header
            <Route exact path="/" component={Home}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
