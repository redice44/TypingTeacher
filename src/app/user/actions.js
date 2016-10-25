import accountUtil from './constants';
import ACTION_TYPE from './actionTypes.js';

export const updateModal = (state) => {
  return {
    type: ACTION_TYPE.modalUpdate,
    data: {
      modalState: state
    }
  };
};

export const updateCurrentTab = (tab) => {
  return {
    type: ACTION_TYPE.tabUpdate,
    data: {
      currentTab: tab
    }
  };
};

export const updateAuth = (auth) => {
  return {
    type: ACTION_TYPE.updateAuth,
    data: {
      auth: auth
    }
  };
};

export const signoutAccount = () => {
  return {
    type: ACTION_TYPE.signoutAccount
  };
};

export const updatePlayer = (player) => {
  return {
    type: ACTION_TYPE.updatePlayer,
    data: {
      player: player
    }
  };
};
