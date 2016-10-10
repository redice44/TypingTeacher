import App from '../app/components/app';
import Game from '../app/components/game';
import Dashboard from '../app/components/dashboard';

const dashboard = {
  path: 'dashboard',
  component: Dashboard,
};

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Game
    },
    childRoutes: [dashboard]
  }
];

export default routes;
