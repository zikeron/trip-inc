import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFount';
import Main from '../components/Main';
import LoginUser from '../containers/LoginUser';
import LoginDriver from '../containers/LoginDriver';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      component: isLogged ? Home : Login,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/main',
      component: Main,
      exact: true,
    },
    {
      path: '/login-user',
      component: LoginUser,
      exact: true,
    },
    {
      path: '/login-driver',
      component: LoginDriver,
      exact: true,
    },
  ];
};

export default serverRoutes;
