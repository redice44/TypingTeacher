import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';

import AccountIconButton from '../account/modal';

function handleTouchTap() {
  console.log(`Don't touch me!`);
}

const Header = () => {
  return (
    <AppBar
      title = 'Typing Teacher'
      onTitleTouchTap={ handleTouchTap }
      iconElementLeft={ <IconButton><ComputerIcon /></IconButton> }
      iconElementRight={ <AccountIconButton /> }
    />
  );
};

export default Header;
