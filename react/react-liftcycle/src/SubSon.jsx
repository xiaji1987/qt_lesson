import React, { Component } from 'react';
import Context from './Context'
const { Consumer } = Context
class SubSon extends Component {
  render() {
   return (
    <div>
     <Consumer>
       {
         (theme) => {
           return (
            <p style={{color: theme}}>1894698</p>
           )
         }
       }
     </Consumer>
     subSon
  </div>
   )
  }
}
export default SubSon;
