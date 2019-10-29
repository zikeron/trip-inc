import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './containers/NotFount';
import Layout from './components/Layout';
import Login from './containers/Login';
import LoginUser from './containers/LoginUser';
import Register from './containers/Register';
import LoginDriver from './containers/LoginDriver';
import Main from './components/Main';
import Home from './containers/Home';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/login-user' component={LoginUser} />
        <Route exact path='/login-driver' component={LoginDriver} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
