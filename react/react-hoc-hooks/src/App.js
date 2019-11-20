import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Drag from './Drag1'
import WithDragAble from './WithDragAble'
import useGragable  from './useGragable'


// hooks
// react15 function 组建没有 this 没有 生命周期
// 只负责 单纯接受 props 渲染

// react 16
// hooks 作用 组件之间逻辑的复用 相比 hoc 解决了哪些问题
// 让 逻辑 扁平化
// Promise -> async
function Header() {
  return (
    <>
      <h2>
        你挪试试
      </h2>
    </>
  )
}

function headbar() {
  return (
    <>
      <h2>
        你挪试试2
      </h2>
    </>
  )
}

function Footer() {
  const [count, setCount] = useState(0)
  const{ style, handleDown } = useGragable()
  // state = { 0 }
  return (
    <div style={style} onMouseDown={handleDown} className="drag">
      你看看嘛?
      <div>
        foot: {count}
        <button onClick={() => {
          setCount(count+1)
        }}>eee</button>
      </div>
    </div>
  )
}

const DragH2 = WithDragAble(Header)
const DragH3 = WithDragAble(headbar)

function App() {
  return (
    <>
      <Drag />
      <DragH2 />
      <DragH3 />
      <Footer />
    </>
  );
}

export default App;
