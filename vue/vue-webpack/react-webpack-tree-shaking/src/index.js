import { add, sub} from "./utils"
import { includes } from "lodash"
import React from 'react'
import App from './App'
import reactDom from 'react-dom'

reactDom.render(<App />, document.getElementById('app'))

console.log(add(1, 2))
console.log(add(3, 4))
console.log(includes([1, 2, 3], 1))