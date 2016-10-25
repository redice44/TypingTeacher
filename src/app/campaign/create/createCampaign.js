import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignMap from '../map';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const c = classNames({
      'content': true
    });

    return (
      <Paper zDepth={1}>
        <TextField
          floatingLabelText='Campaign Name'
        /><br />
        <RaisedButton
          label='Save'
          onTouchTap={() => {
            this.props.addCampaign(this.props.campaign);
          }}
        /><br />
        <RaisedButton
          label='Cancel'
        /><br />
        <CampaignMap />
      </Paper>
    );
  }
};
