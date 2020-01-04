import React, { Component} from 'react';
class AutoBind extends Component {
  render() {
    const { ctx, vmodel } = this.props;
    return (
      <>
      {
        React.cloneElement(
          this.props.children,
          {
            value: ctx.state[vmodel] || '',
            onChange: (event) => {
              ctx.setState({
                [vmodel]: event.target.value
              })
            }
          }
        )
      }
      </>
    )
  }
}
export default AutoBind