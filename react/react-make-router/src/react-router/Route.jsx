import React from 'react'
import Context from './context'
import { pathToRegexp } from 'path-to-regexp'

function matchPath(pathname, option) {
  console.log('matchPath:' + pathname, option)
  // {path: , exact: }
  const { path, exact = false, sensitive = false, strict = false } = option
  // 由Route生成正则表达式
  const regexp = pathToRegexp(path, [], { end: exact, sensitive, strict})
  const match = regexp.exec(pathname)
  return match
}

class Route extends React.Component {
  // path component
  // location
  render () {
    const props = this.props
    return (
      <Context.Consumer>
      {
        (context) => {
          console.log(context)
          const location = context.history.location
          const match = matchPath(location.pathname, props)
          return (
            <>
              { match && props.children }
            </>
          )
        }
      }
      </Context.Consumer>
    )
  }
}

export default Route