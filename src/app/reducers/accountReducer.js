import reducersInit from './init';
import ACTION_TYPE from './actionTypes/account';

const accountReducer = (state = reducersInit.account, action) => {
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
    default:
      return state;
  }
};

export default accountReducer;
