import React, { Component } from 'react'
import WithLogin from './WithLogin'
class UserInfo extends Component {
  render () {
    return (
      <p>username</p>
    )
  }
}

export default WithLogin(UserInfo)
