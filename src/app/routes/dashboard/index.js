import Dashboard from '../../containers/contentPages/dashboard';
import Overview from '../../components/overview';
import Campaign from '../../components/campaign';
import Stats from '../../components/stats';

import campaignRoute from './campaign';
import statsRoute from './stats';

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

export default routes;
