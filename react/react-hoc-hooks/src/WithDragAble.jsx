import React, { Component } from 'react'

export default function(Com) {
  class WithDragAble extends Component {
    state = {
      left: 0,
      top: 0
    }
    handleMove = (event) => {
      let left = event.clientX - 10
      let top = event.clientY - 10
      this.setState({
        left,
        top
      })
    }
    handleup = () => {
      document.removeEventListener('mousemove', this.handleMove)
    }
    handleDown = (event) => {
      document.addEventListener('mousemove', this.handleMove)
      document.addEventListener('mouseup', this.handleup)
    }
    render () {
      const {left, top} = this.state
      return (
        <div style={{ left, top }} className='drag' onMouseDown={this.handleDown}>
          <Com />
        </div>
      )
    }
  }
  return WithDragAble
}