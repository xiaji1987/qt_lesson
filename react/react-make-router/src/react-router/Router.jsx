import React from 'react'
import Context from './context'

class Router extends React.Component {
  constructor(props) {
    super(props)
    // Link  .push -> url变化 -> 监听变化
    this.state = {
      location: props.history.location
    }
    props.history.listen(newLocation => {
      this.setState({
        location: newLocation
      })
    })
  }
  render() {
    const { history } = this.props
    return (
      <Context.Provider value={{history}} {...this.props}></Context.Provider>
    )
  }
}

export default Router