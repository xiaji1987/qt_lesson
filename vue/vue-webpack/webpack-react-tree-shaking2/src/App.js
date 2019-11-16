import React, { useState } from '../node_modules/_react@16.12.0@react';
import { hot } from '../node_modules/_react-hot-loader@4.12.17@react-hot-loader';
import stylesObj from './app.scss';

class App extends React.Component {
	render () {
    console.log(stylesObj)
		return (
			<div>
        <p  className={stylesObj.item}>78910</p>
        <h2>h2</h2>
        <img src="./assets/img/person.png"/>
        1234swdcfv
			</div>
		)
	}
}

export default hot(module)(App);
