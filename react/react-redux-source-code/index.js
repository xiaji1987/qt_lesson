// reducer -> store
const createStore = (reducer) => {
  let currentState;
  currentState = reducer({}, {
    type: '@@redux/INIT'
  });
  function getState() {
    return currentState
  }
  let listeners = [];
  function subscribe(cb) {
    listeners.push(cb)
  }
  // action: plain object {}
  // dispatch -> action -> reducer -> store
  function dispatch(action) {
    // reducer
    currentState = reducer(currentState, action)
    for (let cb of listeners) {
      cb();
    }
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

function combineReducer(reducers) {
  const finalReducerKeys = Object.keys(reducers)
  // 生成 reducer
  // reducer(state, action)
  // reducer - store
  // action - reducer - store
  return (state = {}, action) => {
    console.log('state->>>', state)
    let nextState = {}
    for (let i = 0; i < finalReducerKeys.length; i++) {
      let key = finalReducerKeys[i]
      let reducer = reducers[key]
      const previousState = state[key]
      nextState[key] = reducer(
        previousState, action
      )
    }
    return nextState
  }
}

export {
  createStore,
  combineReducer
}