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
    case ACTION_TYPE.updateAuth:
      console.log(`Updating Auth State: ${action.data.auth}`);

      return updateState(state, {
        auth: action.data.auth
      });
    case ACTION_TYPE.updatePlayer:
      console.log(`Updating the player:`, action.data.player);
      return updateState(state, {
        player: action.data.player
      });
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default accountReducer;
