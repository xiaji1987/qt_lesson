import React from 'react';
import connect from './react-redux/connect';

function App(props) {
  console.log('props', props)
  return (
    <div className="App">
      count: { props.count } &nbsp;&nbsp;
      <button onClick={() => props.inr()}>+</button>&nbsp;&nbsp;
      <button onClick={() => props.dec()}>-</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inr() {
      dispatch({
        type: 'INCREMENT'
      })
    },
    dec() {
      dispatch({
        type: 'DECREMENT'
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
