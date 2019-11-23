import React from 'react';
import BaseComponent from './BaseComponent'
class Header extends BaseComponent {
  state = {  }
  render() {
    window.c++
    const { value } = this.props
    return (
      <div>
        {value}
        {/* {this.props.value} */}
      </div>
    )
  }
}
 
export default Header;