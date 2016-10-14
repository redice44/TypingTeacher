import { combineReducers } from 'redux';
import gameReducer from './game';
import accountReducer from './account';

const appReducers = combineReducers({
  // TODO: add reducers
  game: gameReducer,
  account: accountReducer
});

export default appReducers;
