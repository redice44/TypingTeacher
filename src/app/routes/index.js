import request from 'superagent';

import App from '../components/app';
import Game from '../components/game';
import Dashboard from '../components/dashboard';
import accountUtil from '../../util/account';

const authenticate = (nextState, replace, cb) => {
  // TODO: Handle more gracefully
  console.log(nextState);
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
  component: Dashboard,
  onEnter: authenticate
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
