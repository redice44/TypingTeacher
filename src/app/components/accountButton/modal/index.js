import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import COMMON from '../../../../util/constants/common.js';

const AccountModal = (props) => {
  const { updateModalState, modalState } = props;
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={() => updateModalState(COMMON.CLOSED)}
    />
  ];

  return (
    <Dialog
      title="Modal"
      modal={false}
      action={actions}
      open={modalState}
      onRequestClose={() => updateModalState(COMMON.CLOSED)}
    >
    <p>Hi</p>
    </Dialog>
  );
};


AccountModal.contextTypes = {
  router: React.PropTypes.object
};

export default AccountModal;
