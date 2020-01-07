import React from 'react';
import logo from './logo.svg';
import './App.css';
import connect from './react-redux/connect'

function App(props) {
  console.log(props)
  return (
    <div className="App">
      count: {props.count}
      <button onClick={props.inr}>+</button>
      <button onClick={props.dec}>-</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    const: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inr () {
      dispatch({type: 'INCREMENT'})
    },
    dec () {
      dispatch({type: 'DECREMENT'})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
