import ACTION_TYPE from './actionTypes.js';

export const updateTab = (i) => {
  return {
    type: ACTION_TYPE.updateTab,
    data: {
      index: i
    }
  };
};
