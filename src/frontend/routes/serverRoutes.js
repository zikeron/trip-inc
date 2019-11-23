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
      component: isLogged ? Main : Home,
      exact: true,
    },
    {
      path: '/login',
      component: isLogged ? Main : Login,
      exact: true,
    },
    {
      path: '/register',
      component: isLogged ? Main : Register,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
    {
      path: '/main',
      component: isLogged ? Main : '/',
      exact: true,
    },
    {
      path: '/login-user',
      component: isLogged ? Main : LoginUser,
      exact: true,
    },
    {
      path: '/login-driver',
      component: isLogged ? Main : LoginDriver,
      exact: true,
    },
  ];
};

export default serverRoutes;
