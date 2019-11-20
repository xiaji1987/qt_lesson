import React, { Component } from 'react';
import Son from './Son';
import Context from './Context'
const { Provider } = Context

class Parent extends Component {
  state = {
    theme: 'red'
  }
  render() {
    return (
      <Provider value={this.state.theme}>
        <Son />
      </Provider> 
    )
  }
}
export default Parent;
