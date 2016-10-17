/*
 * Base Routing for server rendering.
 * Does not handle authentication.
 * Route Structure
 - /
 - /dashboard (auth) : User's dashboard
 - /campaign : List of campaigns
 - /campaign/:id : Campaign Page
 - /campaign/:id/:lv : Level page
 - /:userId : User's page
 - /:userId/campaign (auth) : List of campaigns for the user
 - /:userId/campaign/:id (auth) : Campaign page for the user
 - /:userId/campaign/new (auth) : Add new campaign
 - /:userId/game (auth) : List of all games for the user
 - /:userId/game/:id (auth) : Game for the user
 */

import App from '../components/app';
import Game from '../components/game';
import Dashboard from '../components/dashboard';
import Campaign from '../components/campaign';

const dashboard = {
  path: 'dashboard',
  component: Dashboard
};

const campaign = {
  path: 'campaign',
  indexRoute: {
    component: Campaign
  },
  childRoutes: [

  ]
};

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Game
    },
    childRoutes: [
      dashboard,
      campaign
    ]
  }
];

export default routes;
