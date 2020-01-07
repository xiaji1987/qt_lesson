import React, { createContext } from 'react';

const Context = createContext();

class EnhanceProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      state: props.store.getState(),
      dispatch: props.store.dispatch,
      getState: props.store.getState
    }
    props.store.subscribe(() => {
      this.setState({
        state: props.store.getState()
      })
    })
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Provider = EnhanceProvider;
export const Consumer = Context.Consumer;