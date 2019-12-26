import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './router/index'
import { IconStyle } from './assets/iconfont/iconfont'

function App() {
  return (
    <BrowserRouter>
      <IconStyle></IconStyle>
      { renderRoutes(routes) }
    </BrowserRouter>
  );
}

export default App;
