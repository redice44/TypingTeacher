import Stats from '../../../components/stats';
import authenticate from '../../auth';

let routes = {
  path: 'stats',
  component: Stats
};

if (process.env.BROWSER) {
  routes.onEnter = authenticate;
}

export default routes;
