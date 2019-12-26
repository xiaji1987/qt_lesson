import React from 'react';
import Scroll from '../../components/scroll/index'
import { Content } from './style'
export default function () {
  /**
   * <Scroll>
   *  <abc/>
   * </Scroll>
   */
  return (
    <Content>
      <Scroll>
        <div>
          {
            new Array(100).fill(1).map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </div>
      </Scroll>
    </Content>
  )
}