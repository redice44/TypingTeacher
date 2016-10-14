import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import accountReducer from './accountReducer';

const appReducers = combineReducers({
  // TODO: add reducers
  game: gameReducer,
  account: accountReducer
});

export default appReducers;
