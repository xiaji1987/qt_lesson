import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'
import Header from './components/Header'

class App extends Component {
  render() {
    const props = this.props
    return ( 
      <div>
        <Header />
        App
        {
          renderRoutes(props.route.routes)
        }
      </div>
     );
  }
}
 
export default App;
