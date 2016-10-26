import React from 'react';
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import Toggle from 'material-ui/Toggle';

import util from '../../constants';

export default class EditLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lv: {
        wpm: '',
        acc: '',
        difficulty: 2,
        timer: false
      },
      errorMsg: {
        wpm: '',
        acc: ''
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleChange(e) {
    let lv = {};
    let value = e.target.value;
    switch (e.target.name) {
      case 'timer':
        value = e.target.checked;
        break;
      default:
        // Do nothing
    }
    lv[e.target.name] = value;
    this.setState({
      lv: Object.assign({}, this.state.lv, lv)
    });
  }

  handleSliderChange(e, v) {
    let lv = {
      difficulty: v
    };

    this.setState({
      lv: Object.assign({}, this.state.lv, lv)
    });
  }

  componentWillReceiveProps(nextProps) {
    console.log('will mount', nextProps);
    let lv = nextProps.levels[nextProps.editLevelIndex === -1 ? 0 : nextProps.editLevelIndex];
    switch (nextProps.part) {
      case 1:
        lv.wpm = lv.part1.wpm;
        lv.acc = lv.part1.acc;
        lv.difficulty = lv.part1.difficulty;
        lv.timer = lv.part1.timer;
        break;
      case 2:
        lv.wpm = lv.part2.wpm;
        lv.acc = lv.part2.acc;
        lv.difficulty = lv.part2.difficulty;
        lv.timer = lv.part2.timer;
        break;
      default:
        // Do nothing
    }
    console.log(lv);
    this.setState({
      lv: lv
    });
  }

  render () {

    const styles = {
      root: {
        width: '100%',
        padding: '20px',
        display: this.props.editLevelIndex !== -1 ? 'flex' : 'none',
        flexDirection: 'column',
        alignItems: 'center'
      },
      children: {
        display: 'flex',
        alignItems: 'center'
      },
      slider: {
        width: '40%'
      }
    };
    return (
      <Paper zDepth={2} style={styles.root}>
        <h1>Level {this.props.editLevelIndex + 1}{this.props.part === 0 ? '' : `.${this.props.part}`}</h1>
        <h3>Passing Requirements</h3>
        <TextField
          name='wpm'
          value={this.state.lv.wpm}
          floatingLabelText='Required Words Per Minute'
          errorText={this.state.errorMsg.wpm}
          onChange={this.handleChange}
        /><br />
        <TextField
          name='acc'
          value={this.state.lv.acc}
          floatingLabelText='Required Accuracy %'
          errorText={this.state.errorMsg.acc}
          onChange={this.handleChange}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <div>
            <p>Difficulty</p>
            <Slider
              name='difficulty'
              value={this.state.lv.difficulty}
              min={1}
              max={4}
              step={1}
              onChange={this.handleSliderChange}
            />
          </div>
          <Toggle
            label='Timer'
            name='timer'
            toggled={this.state.lv.timer}
            onToggle={this.handleChange}
          />
        </div>
        <div style={{margin: '20px'}}>
          <RaisedButton
            onTouchTap={() => {
              let error = false;
              let errorMsg = {
                wpm: '',
                acc: ''
              };
              let lv = this.props.levels[this.props.editLevelIndex];
              if (isNaN(parseInt(this.state.lv.wpm))) {
                errorMsg.wpm = 'Requires a Number';
                error = true;
              }

              if (isNaN(parseInt(this.state.lv.acc))) {
                errorMsg.acc = 'Requires a Number';
                error = true;
              }

              if (!error) {
                switch (this.props.part) {
                  case 0:
                    lv.wpm = this.state.lv.wpm;
                    lv.acc = this.state.lv.acc;
                    lv.difficulty = this.state.lv.difficulty;
                    lv.timer = this.state.lv.timer;
                    lv.levelState = util.c.levelState.saved;
                    break;
                  case 1:
                    lv.part1.wpm = this.state.lv.wpm;
                    lv.part1.acc = this.state.lv.acc;
                    lv.part1.difficulty = this.state.lv.difficulty;
                    lv.part1.timer = this.state.lv.timer;
                    lv.part1.levelState = util.c.levelState.saved;
                    lv.wpm = -1;
                    lv.acc = -1;
                    lv.difficulty = -1;
                    lv.timer = -1;
                    break;
                  case 2:
                    lv.part2.wpm = this.state.lv.wpm;
                    lv.part2.acc = this.state.lv.acc;;
                    lv.part2.difficulty = this.state.lv.difficulty;
                    lv.part2.timer = this.state.lv.timer;
                    lv.part2.levelState = util.c.levelState.saved;
                    lv.wpm = -1;
                    lv.acc = -1;
                    lv.difficulty = -1;
                    lv.timer = -1;
                    break;
                  default:
                    // Do nothing
                }
                this.props.setLevel(this.props.editLevelIndex, lv);
                this.props.editLevel(-1, 0);
              } else {
                this.setState({
                  errorMsg: errorMsg
                });
              }
            }}
          >
            Save
          </RaisedButton>
          <RaisedButton
            onTouchTap={() => this.props.editLevel(-1, 0) }
          >
            Cancel
          </RaisedButton>
        </div>
      </Paper>
    );
  }
}
