import React, { Component,  } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    val: 0
  }
  shouldComponentUpdate(nextProps, nextState) {
    // 比较 thisprops nextProps state nextState
    // {} {}
    return !this.shallowEqual(this.props, nextProps)
  }
  shallowEqual(obja, objb) {
    if(Object.keys(obja) !== Object.keys(objb)) {
      return false
    }
    let keys = Object.keys(obja)
    for (let i = 0; i < keys.length; i++) {

      // === 除了NaN
      // Object.is() 修复了NaN
      if(Object.is(obja[keys[i]], objb[keys[i]])) {
        return false
      }
    }
  }
  handleChange = () => {
    this.setState({
      val: 4
    })
  }
  render() {
    const { val } = this.state
    return (
      <div>
        {val}
        <button onClick={() => {
          this.handleChange()
        }}>
          点击
        </button>
      </div>
    )
  }
}

export default App;
