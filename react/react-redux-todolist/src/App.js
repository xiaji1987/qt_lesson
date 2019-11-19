import React from 'react';
// hoc
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';

// store.getState()
class App extends React.Component {
  state = {
    inputText: ''
  }
  handleChange = (value) => {
    var inputText = this.state.inputText.slice(0)
    inputText = value
    this.setState({
      inputText
    })
  }
  render() {
    // console.log(this.props);
    const { todolist } = this.props;
    return (
      <div>
        {/* 父节点下面 唯一 */}
        {
          todolist.map((item, index) => {
            return (
              <li key={index}>
                { item.content }
              </li>
            )
          })
        }
        <div>
          <input value={this.state.inputText}
            onChange={this.handleChange} />
          <button onClick={() => {
            console.log(this.state.inputText)
            this.props.addTodo(this.state.inputText)
            // store.dispatch
          }}>
            提交
          </button>
        </div>
      </div>
    )
  }
}
// state 
const mapStateToProps = (state) => {
  console.log(state);
  return {
    todolist: state
  }
}
// <App a={1} b={2} />
// type
// payload 载荷
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo(content) {
      dispatch({
        type: 'ADD_TODO',
        content
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
