import React, { Component } from 'react'

class Child1 extends Component {
  state = {
    data: 1
  }
  componentWillMount () {
    console.log('compentWillMount')
    const { list } = this.props;
    this.setState({
      list
    })
    clearInterval(this.interVal)
  }
  componentDidMount () {
    console.log('componentDidMount')
    const interVal = setInterval(() => {
      let list = this.state.list.slice(0)
      list.push(10)
      this.setState({
        list
      })
    }, 2000);
  }
  updata = () => {
    this.setState({
      data: this.state.data + 1
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log('NextpreProps', nextProps, this.props)// this上一次的
    let list = this.state.list.slice(0)
    list.splice(0, 3, ...(nextProps.list))
    this.setState({
      list
    })
  }
  shouldComponentUpdate (preProps, preState) {
    console.log(preProps, preState)
    // if (this.state.data < 3) {
    //   return false
    // }
    return true
  }
  render() {
    const { data, list } = this.state
    return (
      <>
        <div onClick={this.updata}>Child1</div>
        <div>{data}</div>
        <div>{list}</div>
        <ul>
          {
            list.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </>
    )
  }
}

export default Child1
