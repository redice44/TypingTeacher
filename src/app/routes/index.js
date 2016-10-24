import App from '../components/app';
import MainPage from '../contentPages/main';

import dashboardRoute from './dashboard';

let routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: MainPage
    },
    childRoutes: [
      dashboardRoute
    ]
  }
];

export default routes;
