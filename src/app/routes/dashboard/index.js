import Dashboard from '../../containers/contentPages/dashboard';
import Overview from '../../components/overview';
import Campaign from '../../components/campaign';
import Stats from '../../components/stats';

import campaignRoute from './campaign';
import statsRoute from './stats';
import authenticate from '../auth';

let routes = {
  path: 'dashboard',
  component: Dashboard,
  indexRoute: {
    component: Overview
  },
  childRoutes: [
    campaignRoute,
    statsRoute
  ]
};

if (process.env.BROWSER) {
  routes.onEnter = authenticate;
}

export default routes;
