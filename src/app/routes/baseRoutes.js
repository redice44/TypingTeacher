/*
 * Base Routing for server rendering.
 * Does not handle authentication.
 * Route Structure
 - /
 - /dashboard (auth) : User's dashboard
 - /campaign : List of campaigns
 - /c/:id : Campaign Page
 - /c/:id/:lv : Level page
 - /u/:user-slug : User's page
 - /u/:user-slug/campaign (auth) : List of campaigns for the user
 - /u/:user-slug/campaign/new : Create new campaign
 - /u/:user-slug/c/:id (auth) : Campaign page for the user
 - /u/:user-slug/c/id:/g/ : List of all games from this campaign for the user
 - /u/:user-slug/c/id:/g/:id : individual game from this campaign for the user
 - /u/:user-slug/game (auth) : List of all games for the user
 - /u/:user-slug/g/:id (auth) : Game for the user
 */

import App from '../components/app';
import Game from '../components/game';
import Dashboard from '../components/dashboard';
import Campaign from '../components/campaign';
import CreateCampaign from '../containers/createCampaign';

const dashboard = {
  path: 'dashboard',
  component: Dashboard
};

const createCampaign = {
  path: 'create',
  indexRoute: {
    component: CreateCampaign
  }
};

const campaign = {
  path: 'campaign',
  indexRoute: {
    component: Campaign
  },
  childRoutes: [
    createCampaign
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
