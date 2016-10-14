import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

const accountReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.modalUpdate:
      console.log(`Updating Sign in Modal: ${action.data.modalState}`);

      return updateState(state, {
        modalState: action.data.modalState
      });
    case ACTION_TYPE.tabUpdate:
      console.log(`Updating Tab in Modal: ${action.data.currentTab}`);

      return updateState(state, {
        currentTab: action.data.currentTab
      });
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default accountReducer;
