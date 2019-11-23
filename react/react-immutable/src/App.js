import React from 'react';
import immutable from 'immutable'
import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import RedColor from './RedColor'
window.c = 0
// 可变
let a = [0, 1 , 2]
a.push(3)
console.log(a)
// 不可变
let immediateArr = immutable.fromJS([2, 3, 4])
let b = immediateArr.push(6)
console.log(immediateArr.toJS())
console.log(b.toJS())

let obj = { 
  a: 1,
  b: {
    c: 2
  },
  d: {
    e: 3
  }
}

let imObj = immutable.fromJS(obj)
console.log(imObj.getIn(['b','c'], 'default'))
let imObjNew = imObj.setIn(['d', 'e'], '3333')
console.log(imObjNew)

console.log(imObj.toJS())

class App extends React.Component {
  state = {
    store: imObj
  }
  handleSet = () => {
    let store = this.state.store.setIn(['d', 'e'], '4')
    this.setState({
      store
    })
  }
  render() {
    const { store } = this.state
    return (
      <div>
        <RedColor>
          <p>123</p>
          <div>4986</div>
          <span>65695</span>
        </RedColor>
        <button onClick={this.handleSet}>Set e</button>
        <Header value = {store.get('a')}/>
        <Main value = {store.get('b')}/>
        <Footer value = {store.get('d')}/>
        {console.log(window.c)}
      </div>
    )
  }
}

export default App;
