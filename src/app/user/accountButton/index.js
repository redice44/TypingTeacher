import React from 'react';

// Materia UI Components
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import LogoutIcon from 'material-ui/svg-icons/action/power-settings-new';

// Custom Components
import Modal from './modal';

import accountUtil from '../constants';

const AccountButton = (props) => {
  return (
    <div>
      <IconButton
        onTouchTap={() => {
          props.auth ? props.signoutAccount() : props.updateModalState(accountUtil.c.OPENED);
        }}
        tooltip={ props.auth ? "Sign Out" : "Sign In" }
      >
        { props.auth ? <LogoutIcon /> : <AccountIcon /> }
      </IconButton>
      <Modal {...props} />
    </div>
  );
};

export default AccountButton;
