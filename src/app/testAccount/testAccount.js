import React from 'react';

import IconButton from 'material-ui/IconButton';
import CakeIcon from 'material-ui/svg-icons/social/cake';

const TestAccount = (props) => {
  return (
    <IconButton
      onTouchTap={() => props.signin()}
    >
      <CakeIcon />
    </IconButton>
  );
};

export default TestAccount;
