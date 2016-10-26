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
    let error = {
      wpm: '',
      acc: ''
    };
    this.setState({
      name: '',
      errorMsg: error
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
                // If all levels added are ready to go
                if (this.props.levels.every((lv) => {
                  console.log(lv);
                  if (lv.state === util.c.SINGLE) {
                    return lv.levelState === util.c.levelState.saved;
                  } else if (lv.state === util.c.SPLIT){
                    return lv.part1.levelState &&
                    lv.part1.levelState === util.c.levelState.saved &&
                      lv.part2.levelState &&
                      lv.part2.levelState === util.c.levelState.saved;
                  }
                  return true;
                })) {
                  console.log('all levels saved');
                  let camp = {
                    levels: this.props.levels,
                    name: this.state.name
                  };
                  this.props.addCampaign(camp);
                  this.reset();
                } else {
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
