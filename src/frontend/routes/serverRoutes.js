import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFount';
import Main from '../components/Main';

const serverRoutes = [
  {
    path: '/',
    component: Home,
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
];

export default serverRoutes;
