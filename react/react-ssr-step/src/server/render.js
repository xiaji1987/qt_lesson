import React from 'react';
import { renderToString } from 'react-dom/server';
import Header from '../components/Header';
import { StaticRouter } from 'react-router-dom'
import routes from '../routers'
import { renderRoutes } from 'react-router-config'


export default (req) => {
  // jsx
  const App = (
    <>
      <StaticRouter location={req.path}>
        {/* <Header /> */}
        <div>
          {
            renderRoutes(routes)
          }
        </div>
      </StaticRouter>
    </>
  )
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">${renderToString(App)}</div>
  <script src="/index.js"></script>
</body>
</html>
  `
}