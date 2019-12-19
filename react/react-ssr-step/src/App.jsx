import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config'
class App extends Component {
  render() {
    const props = this.props
    return ( 
      <div>
        App
        {
          renderRoutes(props.route.routes)
        }
      </div>
     );
  }
}
 
export default App;
