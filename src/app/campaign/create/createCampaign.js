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
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render () {
    const c = classNames({
      'content': true
    });

    return (
      <Paper zDepth={1}>
        <TextField
          onChange={this.handleChange}
          floatingLabelText='Campaign Name'
        /><br />
        <RaisedButton
          label='Save'
          onTouchTap={() => {
            let camp = {
              levels: this.props.levels,
              name: this.state.name
            };
            this.props.addCampaign(camp);
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
