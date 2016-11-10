import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import gameReducer from './game/reducer';
import userReducer from './user/reducer';
import notificationReducer from './notification/reducer';
import campaignReducer from './campaign/reducer';
import dashboardReducer from './dashboard/reducer';
import historyReducer from './history/reducer';

const appReducers = combineReducers({
  game: gameReducer,
  account: userReducer,
  notification: notificationReducer,
  campaign: campaignReducer,
  routing: routerReducer,
  dashboard: dashboardReducer,
  history: historyReducer
});

export default appReducers;
