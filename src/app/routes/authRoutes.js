import request from 'superagent';

import App from '../components/app';
import MainPage from '../contentPages/main';
import Game from '../containers/game';
import Dashboard from '../contentPages/dashboard';
import Campaign from '../components/campaign';
import CreateCampaign from '../containers/createCampaign';

import accountUtil from '../../util/account';

const authenticate = (nextState, replace, cb) => {
  // TODO: Handle more gracefully
  request
    .get(accountUtil.r.VALIDATE)
    .end((err, res) => {
      if (err) {
        return cb(err);
      }

      let data = JSON.parse(res.text);
      if (!data.authenticated) {
        console.log('redirecting');
        replace(`/`);
        return cb();
      }
      console.log('Authenticated');
      return cb();
    });
};


const dashboard = {
  path: 'dashboard',
  indexRoute: {
    component: Dashboard
  },
  childRoutes: [
    campaign,
    stats
  ]
  onEnter: authenticate
};

const createCampaign = {
  path: 'create',
  indexRoute: {
    component: CreateCampaign
  },
  onEnter: authenticate
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
      component: MainPage
    },
    childRoutes: [
      campaign,
      dashboard
    ]
  }
];

export default routes;
