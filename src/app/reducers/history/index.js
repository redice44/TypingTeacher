import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

const historyReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.locationUpdate:
      console.log(`Location update:`, action.data);
      // TODO: Validate result
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default historyReducer;
