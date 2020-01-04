import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Input1 from './context/input1'
import windowWidth from './context/getWidthHoc'

/**
 * useState
 * useEffect
 * useMemo: 
 * useCallback: 缓存 一个函数
 * useReducer: dispatch -> action -> reducer -> state
 */


function Width({ windowWidth }) {
  return (
    <h2>{ windowWidth }</h2>
  )
}
const WithWindowWidth = windowWidth(Width)

// hooks
function useWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  // const [height, setHeight] = useState()
  const handleSize = () => {
    setWidth(window.innerWidth)
  }
  // didMount // 再次挂载 didUpdate
  useEffect(() => {
    window.addEventListener('resize', handleSize)
    return () => {
      // unMount
      window.removeEventListener('resize', handleSize);
    }
  })
  return width
}

function Width2() {
  const width = useWidth()
  // width
  return (
    <h3>{width}</h3>
  )
}

function App() {
  return (
    <div className="App">
      <Input1 />
      <WithWindowWidth />
      <Width2 />
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

export default App;
