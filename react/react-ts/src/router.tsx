import * as React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import { App } from './App'
import { About } from './components'
export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <HashRouter>
      <div className="cintainer-fluid">
        <Route component={App} />
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </div>
    </HashRouter>
  )
}