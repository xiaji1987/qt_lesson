import React from 'react'
import { Link } from 'react-router-dom'
import baseComponent from '../../lib/baseComponent'
import { HeaderWrapper, Nav, NavItem, Addition, Logo, Button, SearchWrapper, NavSearch } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actionCreate from './store/actionCreate'
class Header extends baseComponent {
  state = {}
  render() {
    const { focus } = this.props
    console.log(focus)
    return (
      <div>
        <HeaderWrapper>
          <Link to='/'>
            <Logo />
          </Link>
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>
              <i className="iconfont">&#xe636;</i>
            </NavItem>
            <SearchWrapper>
              <CSSTransition timeout={200} in={focus} classNames="slide">
                <NavSearch onFocus={() => {
                  this.props.handFocus()
                }}>
                </NavSearch>
              </CSSTransition>
            </SearchWrapper>
          </Nav>
          <Addition>
            <Link to='/write'>
              <Button className='writting'>
                <i className="iconfont">&#xe615;</i>
                写文章
						</Button>
            </Link>
            <Button className='reg'>注册</Button>
          </Addition>
        </HeaderWrapper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focus: state.getIn(['header', 'focus'])
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    handFocus() {
      dispatch(actionCreate.searchFocus())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(Header)