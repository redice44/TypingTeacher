import App from '../components/app';
import MainPage from '../contentPages/main';

import dashboardRoute from './dashboard';

let route = {
  path: '/',
  component: App,
  indexRoute: {
    component: MainPage
  },
  childRoutes: [
    dashboardRoute
  ]
};

let routes = [
  route
];

export default routes;
