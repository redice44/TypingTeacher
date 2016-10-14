import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import accountReducer from './accountReducer';

const appReducers = combineReducers({
  // TODO: add reducers
  gameReducer,
  accountReducer
});

export default appReducers;
