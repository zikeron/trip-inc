import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import reducer from './reducers/index';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

if (typeof window !== 'undefined') {
  const app = document.getElementById('app');
  const history = createBrowserHistory();
  const preloadedState = window.__PRELOADED_STATE__;
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, preloadedState, composeEnhancer(applyMiddleware(thunk)));

  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <App isLogged={(preloadedState.user.id)} />
      </Router>
    </Provider>, app,
  );
}
