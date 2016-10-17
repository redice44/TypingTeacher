import ACTION_TYPE from './actionTypes.js';

export const setLevels = (levels) => {
  return {
    type: ACTION_TYPE.setLevels,
    data: {
      levels: levels
    }
  };
};

export const pushLevel = (level) => {
  return {
    type: ACTION_TYPE.pushLevel,
    data: {
      level: level
    }
  };
};

export const updateModal = (state) => {
  return {
    type: ACTION_TYPE.updateModal,
    data: {
      modalState: state
    }
  };
};
