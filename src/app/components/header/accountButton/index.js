import React from 'react';

// Materia UI Components
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-box';

// Custom Components
import Modal from './modal';

import accountUtil from '../../../../util/account';

const AccountButton = (props) => {
  const { updateModalState } = props;
  return (
    <div>
      <IconButton
        onTouchTap={() => updateModalState(accountUtil.c.OPENED)}
      >
        <AccountIcon />
      </IconButton>
      <Modal {...props} />
    </div>
  );
};

export default AccountButton;
