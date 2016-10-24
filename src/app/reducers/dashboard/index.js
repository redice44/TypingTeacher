import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

const accountReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.updateTab:
      console.log(`Updating current dashboard tab`, action.data.index);

      return updateState(state, {
        currentTab: action.data.index
      });
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default accountReducer;
