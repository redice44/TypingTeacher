import React from 'react';
import request from 'superagent';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';

import AccountIconButton from '../../containers/account.js';

function handleTouchTap() {
  console.log('logging out');

  request
    .get('/signout')
    .end((err, res) => {
      if (err) {
        return console.log(err);
      }

      console.log(JSON.parse(res.text));
    });
}

function verify() {
  console.log('verifying');
  request
    .get('/verify')
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
      iconElementRight={ <AccountIconButton /> }
    />
  );
};

export default Header;
