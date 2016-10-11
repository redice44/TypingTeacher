import App from '../components/app';
import Game from '../components/game';
import Dashboard from '../components/dashboard';

const dashboard = {
  path: 'dashboard',
  component: Dashboard
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
