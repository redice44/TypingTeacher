import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddIcon from 'material-ui/svg-icons/content/add';

import campaignUtil from '../../../../../util/campaign';

export default class AddLevel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FloatingActionButton
        onTouchTap={() => {
          // TODO: Modal popout
          this.props.updateModal(campaignUtil.c.OPENED);
        }}
      >
        <AddIcon />
      </FloatingActionButton>
    );
  }
}
