import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import reducer from './reducers/index';
import { initialState } from './environment/environment';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = document.getElementById('app');
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancer());

render(
  <Provider store={store}>
    <App />
  </Provider>, app,
);
