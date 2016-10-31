import React from 'react';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ComputerIcon from 'material-ui/svg-icons/hardware/computer';

import AccountIconButton from '../user/accountButton';
import TestAccountButton from '../testAccount';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title = 'Typing Teacher'
        onLeftIconButtonTouchTap={ () => this.context.router.push('/') }
        iconElementLeft={ <IconButton><ComputerIcon /></IconButton> }
        iconElementRight={ <div style={{display: 'flex'}}><AccountIconButton /></div> }
      />
    );
  }
};

Header.contextTypes = {
  router: React.PropTypes.object
};
