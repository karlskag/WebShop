import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import webShop from './reducers/reducers.js';
import App from './components/WebShop';

//Default stock test-data
import stock from '../data/stock';

let store = createStore(
  webShop,
  stock
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
