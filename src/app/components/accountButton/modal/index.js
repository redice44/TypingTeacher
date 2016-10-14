import React from 'react';

import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import FlatButton from 'material-ui/FlatButton';

import COMMON from '../../../../util/constants/common.js';

const AccountModal = (props) => {
  const {
    updateModalState,
    updateCurrentTab,
    modalState,
    currentTab
  } = props;
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
      <Tabs
        onChange={(tab) => updateCurrentTab(tab)}
        value={currentTab}
      >
      <Tab label="Sign In" value={0} />
        <Tab label="Register Account" value={1} />
      </Tabs>
      <SwipeableViews
        index={currentTab}
        onChangeIndex={(tab) => updateCurrentTab(tab)}
      >
        <div>
          <p>Sign In</p>
        </div>
        <div style={{overflow: 'hidden'}}>
          <p>Create Account</p>
        </div>
      </SwipeableViews>
    </Dialog>
  );
};


AccountModal.contextTypes = {
  router: React.PropTypes.object
};

export default AccountModal;
