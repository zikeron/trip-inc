import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFount';
import Layout from './components/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
