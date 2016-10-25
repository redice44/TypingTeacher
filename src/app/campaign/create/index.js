import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignMap from '../../campaignMap';
import LevelList from '../level/levelList';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const c = classNames({
      'content': true
    });

    return (
      <Paper zDepth={1} className={c}>
        <TextField
          floatingLabelText='Campaign Name'
        /><br />
        <RaisedButton
          label='Save'
        /><br />
        <RaisedButton
          label='Cancel'
        /><br />
        <CampaignMap />
        <LevelList {... this.props} />
        <Link to='/'>Home Link</Link>
      </Paper>
    );
  }
};
