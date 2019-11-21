import React from 'react';
import { connect } from 'react-redux'
import './App.css';

class App extends React.Component{
  handleCheck = (event, index) => {
    const checked = event.target.checked
    console.log(event.target) 
    // dispatch
    this.props.checked(checked, index)
  }
  render() {
    const { shopCart } = this.props
    console.log(this.props)   
    console.log(shopCart)   
    return (
      <div>
        {
          shopCart.map((item, index) => {
            return (
              <div key={index}>
                {/* <label htmlFor="" key={index}>{item}</label> */}
                <input type="checkbox" checked={item.checked} onChange={(event) => {
                  this.handleCheck(event, index)
                }}></input>
                <label>{item.name}/RMB:{item.price}</label>
                <button>-</button>{item.count}
                <button>+</button>
                <button onClick={() => {
                  this.props.handleDel(index)
                }}>delete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    shopCart: state.shopCart
  }
}
const del = (index) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'DEL',
        index
      })
    }, 2000)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    checked(checked, index) {
      dispatch({
        type: 'ToGGLE_CHECKED',
        checked,
        index
      })
    },
    handleDel(index) {
      dispatch(del(index))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
