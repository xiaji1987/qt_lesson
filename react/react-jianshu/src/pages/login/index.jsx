import React from 'react'
import baseComponent from '../../lib/baseComponent'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import * as actionCreate from './store/actionCreate'
import { connect } from 'react-redux'

class Login extends baseComponent {
  state = {}
  userName = React.createRef()
  passWord = React.createRef()
  render() { 
    return (
      <LoginWrapper>
        <LoginBox>
          <Input placeholder="账号" ref={this.userName}></Input>
          <Input placeholder="密码" type="password" ref={this.passWord}></Input>
          <Button onClick={() => {
            // console.log(this.userName.current.value)
            this.props.login()
          }}>登录</Button>
        </LoginBox>
      </LoginWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login() {
      dispatch(actionCreate.changeLoginStatus(true))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)