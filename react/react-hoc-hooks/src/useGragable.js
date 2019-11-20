import React, { useState } from 'react'

// hooks
// 自定义 hooks 方法名以use开头
function useDragable() {
  let [ left, setLeft ] = useState(0)
  let [ top, setTop ] = useState(0)

  const handleMouseMove = function (event) {
    let left = event.clientX
    let top = event.clientY
    setLeft(left) //修改left.value
    setTop(top) //修改top.value
  }
  const handleMouseUp = function () {
    document.removeEventListener("mousemove", handleMouseMove)
  }
  const handleDown = function() {
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }
  return {
    style: {
      left,
      top
    },
    handleDown
  }
}

export default useDragable