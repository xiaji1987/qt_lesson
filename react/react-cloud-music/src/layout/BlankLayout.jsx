import React from 'react';
import {
  renderRoutes
} from 'react-router-config';

function BlankLayout({ route }) {
  console.log('全局的');
  return (
    <>
    {/* router-view */}
    { renderRoutes(route.routes) }
    </>
  )
}

export default BlankLayout;