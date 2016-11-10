import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignMap from '../map';
import util from '../constants';

export default class CreateCampaign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  reset() {
    console.log('campaign/create: Resetting State');
    this.setState({
      name: ''
    });
    this.props.updateCreating(false);
    this.props.resetLevel();
    this.props.editLevel(-1, 0);
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
      root: {
        display: this.props.isCreating ? 'block' : 'none'
      },
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
      <Paper zDepth={1} style={styles.root}>
        <div style={styles.inputs}>
          <TextField
            value={this.state.name}
            onChange={this.handleChange}
            floatingLabelText='Campaign Name'
          />
          <div style={styles.buttons}>
            <RaisedButton style={styles.btn}
              label='Save'
              onTouchTap={() => {
                // TODO: Check to make sure it's a valid level config. ie has levels and ends single
                // If all levels added are ready to go
                if (this.state.name !== '' &&
                  this.props.levels.every((lv) => {
                  if (lv.state === util.c.SINGLE) {
                    return lv.levelState === util.c.levelState.saved;
                  } else if (lv.state === util.c.SPLIT) {
                    return lv.part1.levelState &&
                    lv.part1.levelState === util.c.levelState.saved &&
                      lv.part2.levelState &&
                      lv.part2.levelState === util.c.levelState.saved;
                  }
                  return true;
                })) {
                  console.log('all levels saved');
                  console.log(this.props);
                  let tempLevels = this.props.levels.map((lv, i) => {
                    console.log(lv, i);
                    if (lv.state === util.c.SINGLE) {
                      lv.levelState = i === 0 ? util.c.levelState.active : '';
                    } else if (lv.state === util.c.SPLIT) {
                      lv.part1.levelState = '';
                      lv.part2.levelState = '';
                    }
                    return lv;
                  });
                  let camp = {
                    levels: tempLevels,
                    name: this.state.name
                  };
                  this.props.addCampaign(camp, this.props.username);
                  this.reset();
                } else {
                  // TODO Display error
                  console.log('levels need to be saved still');
                }
              }}
            />
            <RaisedButton
              label='Cancel'
              onTouchTap={() => {
                this.reset();
              }}
            />
          </div>
        </div>
        <CampaignMap isEditing={true}/>
      </Paper>
    );
  }
};
