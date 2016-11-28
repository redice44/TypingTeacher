import React from 'react';

// Materia UI Components
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import LogoutIcon from 'material-ui/svg-icons/action/power-settings-new';

// Custom Components
import Modal from './modal';

import accountUtil from '../constants';

export default class AccountButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IconButton
          style={ this.props.auth ? {} : {display: "none"}}
          onTouchTap={() => this.context.router.push('/dashboard')}
          tooltip='Dashboard'
        >
          <AccountIcon /> 
        </IconButton>
        <IconButton
          onTouchTap={() => {
            this.props.auth ? this.props.signoutAccount() : this.props.updateModalState(accountUtil.c.OPENED);
          }}
          tooltip={ this.props.auth ? "Sign Out" : "Sign In" }
        >
          { this.props.auth ? <LogoutIcon /> : <AccountIcon /> }
        </IconButton>
        <Modal {...this.props} />
      </div>
    );
  }
}

AccountButton.contextTypes = {
  router: React.PropTypes.object
};
