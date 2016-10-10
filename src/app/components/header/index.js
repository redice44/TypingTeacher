import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import AccountIcon from 'material-ui/svg-icons/action/account-box';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';

function handleTouchTap() {
  console.log(`Don't touch me!`);
}

const Header = () => {
  return (
    <AppBar
      title = 'Typing Teacher'
      onTitleTouchTap={ handleTouchTap }
      iconElementLeft={ <IconButton><ComputerIcon /></IconButton> }
      iconElementRight={ <IconButton><AccountIcon /></IconButton> }
    />
  );
};

export default Header;
