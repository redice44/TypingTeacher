import React from 'react';

// Material UI Components
import Snackbar from 'material-ui/Snackbar';

import util from '../../../util/notification';

const Notification = (props) => {
  let styleClass = 'notification';

  switch (props.notificationType) {
    case util.c.MESSAGE:
      styleClass = 'notification message';
      break;
    case util.c.ERROR:
      styleClass = 'notification error';
      break;
    case util.c.SUCCESS:
      styleClass = 'notification success';
      break;
    default:
      // Do nothing.
  }

  return (
    <Snackbar
      open={props.open}
      message={props.message}
      className={styleClass}
      autoHideDuration={4000}
      onRequestClose={() => props.closeNotification()}
    />
  );
};

export default Notification;
