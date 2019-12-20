import React from 'react'
import ReactDom from 'react-dom'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import routes from '../routers'
import { getClientStore } from '../store/index'

const App = function () {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        {/* <Header/> */}
        <div>
          {
            renderRoutes(routes)
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('app'))