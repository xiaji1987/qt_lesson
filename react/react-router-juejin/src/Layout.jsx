import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'

class PrivateRoute extends Component{
  render () {
    const props = this.props
    return (
      <div>
        { props.isLogin ? <Route {...props}/> : ''}
      </div>
    )
  }
}

function PriCom() {
  console.log(123)
  return (
    <div>
      秘密的
    </div>
  )
}

function Home() {
  return (
    <div>
      <img src="https://goss.cfp.cn/creative/vcg/nowarter800/version2/495833187.jpg" alt=""/>
      <div>
        <Link to="/home">首页</Link>
        <Link to="/home/guanzhu">关注</Link>
        <Link to="/home/fe">前端</Link>
        <Link to="/home/rd">后端</Link>
        <Link to="/home/private">不知道啊</Link>
      </div>
      <div className="main">
        <Route path="/home/guanzhu" component={Guanzhu}></Route>
        <Route path="/home/fe" component={Fe}></Route>
        <Route path="/home/rd" component={Rd}></Route>
        <PrivateRoute path="/home/private" component={PriCom} isLogin={true}/>
      </div>
    </div>
  )
}

function Guanzhu() {
  return (
    <div>
      关注你看看啊，你再点一下试试
    </div>
  )
}

function Fe() {
  return (
    <div>
      前端呃呃呃
    </div>
  )
}

function Rd() {
  return (
    <div>
      后端不会啊
    </div>
  )
}

function Me() {
  return (
    <div>
      <img src="https://static.veer.com/veer/static/resources/keyword/2018-10-15/e876ee8c1a794e31bc3c7ca8a3915dd1.jpg" alt=""/>
    </div>
  )
}

class Layout extends Component {
  render () {
    const isLogin = true
    const isIn = true
    return (
      <div>
        <div className="main">
          <Route path="/home" component={Home}></Route>
          { isIn && <Route path="/me" component={Me}></Route> }
        </div>
        <div className="footer">
          <Link to="/home">home</Link>
          {isLogin && <Link to="/me">me</Link>}
        </div>
      </div>
    )
  }
}

export default Layout;