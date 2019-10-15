import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFount';
import Layout from './components/Layout';
import Main from './components/Main';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path='/' component={Main} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
