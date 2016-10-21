import ACTION_TYPE from './actionTypes.js';

export const playPhrase = () => {
  return {
    type: ACTION_TYPE.playPhrase,
    data: {
    }
  };
};

export const playTime = () => {
  return {
    type: ACTION_TYPE.playTime,
    data: {
    }
  };
};

export const updateResults = (results) => {
  return {
    type: ACTION_TYPE.updateResults,
    data: {
      results: results
    }
  };
};

export const setTimer = (timer) => {
  return {
    type: ACTION_TYPE.setTimer,
    data: {
      timer: timer
    }
  };
};

export const updatePhrase = (phrase) => {
  return {
    type: ACTION_TYPE.updatePhrase,
    data: {
      phrase: phrase
    }
  };
};
