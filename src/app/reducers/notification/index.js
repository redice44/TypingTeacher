import reducersInit from './init.js';
import ACTION_TYPE from './actionTypes.js';

import util from '../../../util/notification';

const notificationReducer = (state = reducersInit, action) => {
  switch (action.type) {
    case ACTION_TYPE.sendMessage:
      console.log(`Sending Notification Message: ${action.data.message}`);

      return updateState(state, {
        message: action.data.message,
        open: true,
        type: util.c.MESSAGE
      });
    case ACTION_TYPE.sendError:
      console.log(`Sending Notification Error: ${action.data.message}`);

      return updateState(state, {
        message: action.data.message,
        open: true,
        type: util.c.ERROR
      });
    case ACTION_TYPE.sendSuccess:
      console.log(`Sending Success Notification: ${action.data.message}`);

      return updateState(state, {
        message: action.data.message,
        open: true,
        type: util.c.SUCCESS
      });
    case ACTION_TYPE.closeNotification:
      console.log(`Closing Notification`);

      return updateState(state, {
        open: false
      });
    default:
      return state;
  }
};

function updateState(state, update) {
  return Object.assign({}, state, update);
}

export default notificationReducer;
