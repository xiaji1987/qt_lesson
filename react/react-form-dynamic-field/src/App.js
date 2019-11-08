import React from 'react';
import './App.css';

class DynamicFidle extends React.Component {
  handleAdd = () => {
    this.props.onAdd()
  }
  handleSub = (index) => {
    this.props.onSub(index)
  }
  render () {
    const { rule } = this.props
    return (
      <>
        <label>规则</label>
        {
          rule.map((preRule, index) => {
            return (
              <div key={index}>
                <label>姓名</label>
                <input type="text" value={preRule.name} data-key='name' data-index={index} onChange={this.props.onFiledChange}></input>
                <label>年龄</label>
                {/* 受控组件 */}
                <input type="text" value={preRule.age} data-key='age' data-index={index} onChange={this.props.onFiledChange}></input>
                <button onClick={() => {
                  // console.log(index)
                  this.handleSub(index)
                }}>-</button>
              </div>
            )
          })
        }
        <br/>
        <button onClick={this.handleAdd}>+</button>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    date: '',
    rule: [
      { name: '', age: '' }
    ]
  }
  handleAdd = () => {
    let rule = this.state.rule.slice(0);
    rule.push({ name: '', age: '' })
    this.setState({
      rule
    })
  }
  handleSub = (index) => {
    let rule = this.state.rule.slice(0);
    rule.splice(index, 1)
    this.setState({
      rule
    })
  }
  handleChange = (event) => {
    const key = event.target.dataset.key
    const value = event.target.value
    const index = event.target.dataset.index
    console.log(event)
    let rule = this.state.rule.slice(0)
    rule[parseInt(index)][key] = value
    this.setState({
      rule
    })

  }
  render () {
    const { rule } = this.state
    return (
      <div>
        <label htmlFor="date">日期</label>
        <input type="date" id="date"></input>
        <br/>
        <DynamicFidle rule={rule} onAdd={this.handleAdd} onSub={this.handleSub} onFiledChange={this.handleChange}/>
      </div>
    )
  }
}

export default App;
