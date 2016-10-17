import React from 'react';
import request from 'superagent';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';

import AccountIconButton from '../../containers/account.js';
import TestAccountButton from '../../containers/testAccount.js';

import accountUtil from '../../../util/account';

// TODO: Move to container
function handleTouchTap() {
  console.log('logging out');

  request
    .get(accountUtil.r.SIGN_OUT)
    .end((err, res) => {
      if (err) {
        return console.log(err);
      }

      console.log(JSON.parse(res.text));
    });
}

// TODO: Move to container
function verify() {
  console.log('verifying');
  request
    .get(accountUtil.r.VALIDATE)
    .end((err, res) => {
      if (err) {
        return console.log(err);
      }

      console.log(JSON.parse(res.text));
    });
}

const Header = () => {
  return (
    <AppBar
      title = 'Typing Teacher'
      onLeftIconButtonTouchTap={ verify }
      onTitleTouchTap={ handleTouchTap }
      iconElementLeft={ <IconButton><ComputerIcon /></IconButton> }
      iconElementRight={ <div style={{display: 'flex'}}><TestAccountButton /><AccountIconButton /></div> }
    />
  );
};

export default Header;
