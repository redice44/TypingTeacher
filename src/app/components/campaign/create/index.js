import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignMap from '../map';
import LevelList from '../levelList';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Paper zDepth={1}>
        <TextField
          floatingLabelText='Campaign Name'
        />
        <RaisedButton
          label='Resume'
        />
        <RaisedButton
          label='Export'
        />
        <CampaignMap {... this.props}/>
        <LevelList {... this.props} />
        <Link to='/'>Home Link</Link>
      </Paper>
    );
  }
};
