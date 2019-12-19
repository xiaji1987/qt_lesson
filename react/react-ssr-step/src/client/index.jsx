import React from 'react'
import ReactDom from 'react-dom'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import {renderRoutes} from 'react-router-config'
import routes from '../routers'

const App = function() {
  return (
    <>
      <BrowserRouter>
        {/* <Header/> */}
        <div>
          {
            renderRoutes(routes)
          }
        </div>
      </BrowserRouter>
    </>
  )
}

ReactDom.hydrate(<App />, document.getElementById('app'))