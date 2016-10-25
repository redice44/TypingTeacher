import ACTION_TYPE from './actionTypes.js';

export const sendMessage = (message) => {
  return {
    type: ACTION_TYPE.sendMessage,
    data: {
      message: message
    }
  };
};

export const sendError = (err) => {
  // TODO: If needed, handle error types, but for now just send the error message
  return {
    type: ACTION_TYPE.sendError,
    data: {
      message: err
    }
  };
};

export const sendSuccess = (message) => {
  return {
    type: ACTION_TYPE.sendSuccess,
    data: {
      message: message
    }
  };
};

export const closeNotification = () => {
  return {
    type: ACTION_TYPE.closeNotification
  };
};
