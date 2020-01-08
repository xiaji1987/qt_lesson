import React from 'react'
import { createBrowserHistory } from 'history'
import { Router } from '../react-router/index'

class BrowerRouter extends React.Component {
  // 路由的信息 { location, listen, push, go }
  // h5 history api
  history = createBrowserHistory();
  render () {
    console.log('history:', this.history, 'props:', this.props);
    return (
      <Router history={this.history} {...this.props}></Router>
    )
  }
}

export default BrowerRouter