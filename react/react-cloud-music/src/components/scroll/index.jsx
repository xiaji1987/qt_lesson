import React, { useEffect, useRef } from 'react'
import BScroll from 'better-scroll'
import styled from 'styled-components'

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export default function(props) {
  // React.createRef
  const scrollContainerRef = useRef()
  // didMount didupdate unMount
  useEffect(() => {
    const scroll = new BScroll(
      scrollContainerRef.current
    )
  })
  return (
    <ScrollContainer ref={scrollContainerRef}>
      {
        props.children
      }
    </ScrollContainer>
  )
}