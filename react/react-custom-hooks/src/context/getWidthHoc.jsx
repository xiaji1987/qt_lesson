import React, { Component } from 'react'

// 每个组件都需要屏幕的宽度
// hoc
// withWidth(<Header />)
// this.props.windowWidth 1000

export default function withWindowWidth(Com) {
  class withWindowWidth extends Component {
    //
    state = {
      width: window.innerWidth
    }
    componentDidMount() {
      window.addEventListener('resize', () => {
        this.setState({
          width: window.innerWidth
        })
      })
    }
    render () {
      return (
        <Com windowWidth={this.state.width} />
      )
    }
  }
  return withWindowWidth
}