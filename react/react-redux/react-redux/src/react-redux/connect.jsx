import React from 'react';
import { Consumer } from "./index";

export default (mapStateToProps, mapDispatchToProps) => (Component) => {
  // state dispatch => props

  class Connected extends React.Component  {
    render () {
      return (
        <Consumer>
      {
        (store) => {
          const state = store.getState();
          const dispatch = store.dispatch;
          const stateToProps = mapStateToProps(state);
          const dispatchToProps = mapDispatchToProps(dispatch);
          // 放到props 上去
          return (
            <Component { ...stateToProps } { ...dispatchToProps }></Component>
          )
        }
      }
    </Consumer>
      )
    }
  }

  return Connected
}