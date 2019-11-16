import { includes } from 'lodash'
import React from 'react';
import reactDom from 'react-dom';
import App from './App';

reactDom.render(<App />, document.getElementById('app'));
// import { groupBy } from 'loadsh'
// import includes from 'lodash/includes';
import { add, subsub } from './utils';
console.log(add(1, 2));
console.log(add(3, 4));
console.log(includes([1, 2, 3], 1));