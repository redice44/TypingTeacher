import App from '../app';
import Game from '../game';

import dashboardRoute from './dashboard';

let route = {
  path: '/',
  component: App,
  indexRoute: {
    component: Game
  },
  childRoutes: [
    dashboardRoute
  ]
};

let routes = [
  route
];

export default routes;
