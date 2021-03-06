import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/components/Layout';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/initializers/initialState';
import render from '../render/render';

const staticRoutes = (req, res, next) => {
  try {
    let initialState;
    try {
      const { email, name, id } = req.cookies || {};
      let user = {};
      if (email || name || id) {
        user = {
          id,
          email,
          name,
        };
      }

      initialState = {
        user,
        driver: {},
      };

    } catch (err) {
      console.log(err);
    }
    console.log(initialState, '<---------------------initialState')
    const isLogged = initialState.user.id;
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter
          location={req.url}
          context={{}}
        >
          <Layout>
            {renderRoutes(Routes(isLogged))}
          </Layout>
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (e) {
    next(e);
  }
};

export default staticRoutes;
