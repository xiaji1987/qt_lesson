import React, { Component } from 'react';

// {tag: 'div', attribute: '', }
// 服务端：转为字符串的HTML
class Header extends Component {
  componentWillMount() {
    console.log('component will')
  }
  render() { 
    return ( 
      <div>hell
        <button onClick={this.buy}>buy</button>
      </div>
     );
  }
}
 
export default Header;