import React, { useState, useReducer } from 'react';
import { defaultState, reducer } from './reducer'

function App() {
  const [searchValue, setSearchVal] = useState('')
  const [store, dispatch] = useReducer(reducer, defaultState)
  const handleSearchInputChanges = (event) => {
    setSearchVal(event.target.value)
  }
  const callSearchFunction = (event) => {
    event.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        dispatch({
          type: 'GETRES',
          movies: res.Search
        })
      })
  }
  return (
    <div className="App">
      <div className="m-container">
          <form className="search">
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
          />

          <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
        {
          store.movies.map((item, index) => {
            return (
              <li key={index}>
                <h2>{item.Title}</h2>
                <img src={item.Poster} alt=""/>
                <p>{item.Year}</p>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}

export default App