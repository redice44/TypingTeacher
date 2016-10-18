import ACTION_TYPE from './actionTypes.js';

export const setLevel = (i, level) => {
  return {
    type: ACTION_TYPE.setLevel,
    data: {
      level: level,
      index: i
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

export const updateLevelType = (levelType) => {
  return {
    type: ACTION_TYPE.updateLevelType,
    data: {
      levelType: levelType
    }
  };
};

export const updateLevelState = (i, levelState) => {
  return {
    type: ACTION_TYPE.updateLevelState,
    data: {
      levelState: levelState,
      index: i
    }
  };
};
