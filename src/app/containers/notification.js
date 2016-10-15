import { connect } from 'react-redux';
import actionTypes from '../reducers/notification/actionTypes.js';
import {
  sendMessage,
  sendError,
  sendSuccess,
  closeNotification
} from '../reducers/notification/actions.js';
import util from '../../util/notification';
import Notification from '../components/notification';

// Convert store state to props to be passed to component
const mapStateToProps = (state, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Set props to send
    message: state.notification.message,
    notificationType: state.notification.type,
    open: state.notification.open
  };
};

// Creates props that will dispatch actions
const mapDispatchToProps = (dispatch, ownProps) => {
  // ownProps are props sent to the component
  return {
    // Actions to send
    sendMessage: (message) => {
      dispatch(sendMessage(message));
    },
    sendError: (err) => {
      dispatch(sendError(err));
    },
    sendSuccess: (message) => {
      dispatch(sendSuccess(message));
    },
    closeNotification: () => {
      dispatch(closeNotification());
    },

  };
};

const NotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);

export default NotificationContainer;
