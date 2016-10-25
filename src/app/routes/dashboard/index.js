import Dashboard from '../../dashboard';
import Overview from '../../dashboard/playerOverview';
import Campaign from '../../campaign';
import Stats from '../../stats';

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
