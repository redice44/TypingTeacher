import Campaign from '../../../campaign';
import authenticate from '../../auth';

let routes = {
  path: 'campaign',
  component: Campaign
};

if (process.env.BROWSER) {
  routes.onEnter = authenticate;
}

export default routes;
