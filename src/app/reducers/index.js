import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { routerReducer } from 'react-router-redux';

import gameReducer from './game';
import accountReducer from './account';
import notificationReducer from './notification';


const appReducers = combineReducers({
  game: gameReducer,
  account: accountReducer,
  routing: routerReducer,
  notification: notificationReducer
});

export default appReducers;
