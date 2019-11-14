import React, { Component } from 'react'
import WithLogin from './WithLogin'
class OrderList extends Component {
  render() {
    return (
      <ul>
        <li>IPad</li>
        <li>MAC</li>
      </ul>
    )
  }
}
// 返回的是组建
export default WithLogin(OrderList);
