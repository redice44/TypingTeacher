import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

const accountReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.modalUpdate:
      console.log(`Updating Sign in Modal: ${action.data.modalState}`);

      return Object.assign({}, state, {
        modalState: action.data.modalState
      });
    case ACTION_TYPE.tabUpdate:
      console.log(`Updating Tab in Modal: ${action.data.currentTab}`);

      return Object.assign({}, state, {
        currentTab: action.data.currentTab
      });
    case ACTION_TYPE.submitAccount:
      console.log(`Submit Account:`, action.data.account);

      // TODO: Handle account stuff
      return state;
    default:
      return state;
  }
};

export default accountReducer;
