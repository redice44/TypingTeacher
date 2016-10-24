import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import gameReducer from './game';
import accountReducer from './account';
import notificationReducer from './notification';
import campaignReducer from './campaign';
import dashboardReducer from './dashboard';

const appReducers = combineReducers({
  game: gameReducer,
  account: accountReducer,
  notification: notificationReducer,
  campaign: campaignReducer,
  routing: routerReducer,
  dashboard: dashboardReducer
});

export default appReducers;
