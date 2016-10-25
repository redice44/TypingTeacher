import App from '../app';
import MainPage from '../game';

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
