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

    const styles = {
      inputs: {
        display: 'flex',
        justifyContent: 'center'
      },
      buttons: {
        display: 'flex',
        marginLeft: '100px',
        alignItems: 'center'
      },
      btn: {
        margin: '10px'
      }
    };

    return (
      <Paper zDepth={1}>
        <div style={styles.inputs}>
          <TextField
            onChange={this.handleChange}
            floatingLabelText='Campaign Name'
          />
          <div style={styles.buttons}>
            <RaisedButton style={styles.btn}
              label='Save'
              onTouchTap={() => {
                let camp = {
                  levels: this.props.levels,
                  name: this.state.name
                };
                this.props.addCampaign(camp);
              }}
            />
            <RaisedButton
              label='Cancel'
            />
          </div>
        </div>
        <CampaignMap />
      </Paper>
    );
  }
};
