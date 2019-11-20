import React from 'react';
import logo from './logo.svg';
import './App.css';
import Child1 from './Child1'
import Parent from './Parent'

class App extends React.Component {
  state = {
    list: [1, 2, 3],
    show: true
  }
  render () {
    const { list, show } = this.state
    return (
      <>
        <Parent />
        <button onClick={() => {
          this.setState({
            show: !this.state.show
          })
        }}>卸载</button>
        {show ? <Child1 list={list}/> : null}
      </>
    )
  }
}

export default App;
