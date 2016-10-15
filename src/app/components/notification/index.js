import React from 'react';

// Material UI Components
import Snackbar from 'material-ui/Snackbar';

const Notification = (props) => {
  //const { updateModalState } = props;
  return (
    <Snackbar
      open={props.open}
      message={props.message}
      autoHideDuration={4000}
      onRequestClose={() => props.closeNotification()}
    />
  );
};

export default Notification;
