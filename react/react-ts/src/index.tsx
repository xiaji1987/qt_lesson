import * as React from 'react'
import * as ReactDom from 'react-dom'
import { AppRouter } from './router'

ReactDom.render(
  <AppRouter />,
  document.getElementById('root')
)