import React, { Component, useState } from 'react'
import AutoBind from './autoBind'

// 所有自定义的hooks都以use开头
// hooks只能在函数组件里面用
function useFormInput (defaultValue) {
  const [value, setValue] = useState(defaultValue)
  const onChange = (event) => {
    setValue(event.target.value)
  }
  return {
    value,
    onChange
  }
}

function Input2 () {
  const userName = useFormInput('default')
  return (
    <input type="text" {...userName} />
  )
}

class Input1 extends Component {
  state = {
    val1: ''
  }
  handleVal1 = (event) => {
    this.setState({
      val1: event.target.value
    })
  }
  render () {
    const { val1, handleVal1 } = this.props
    return (
      <div>
        <input type="text" value={val1} onChange={handleVal1} />
        <AutoBind vmodel="val2" ctx={this}>
          <input type="text" />
        </AutoBind>
        <Input2 />
      </div>
    )
  }
}

// React.createElement('div', {})
// React.createElement('input')
export default Input1;