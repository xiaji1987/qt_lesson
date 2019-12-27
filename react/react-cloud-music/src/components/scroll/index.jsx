import React, {
  useEffect, useRef
} from 'react';
import BScroll from 'better-scroll';
import styled from 'styled-components';
import {
  Content
} from './style.js'
const ScrollContainer = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
`
export default function(props) {
  // React.createRef  ref
  const scrollConteinerRef = useRef();
  // didMount didupdate unMount
  useEffect(() => {
    const scroll = new BScroll(
      scrollConteinerRef.current,
      {
      }
    )
  })

  return (
    <Content>
      <ScrollContainer ref={scrollConteinerRef}>
        {
          props.children
        }
      </ScrollContainer>
    </Content>
  )
}