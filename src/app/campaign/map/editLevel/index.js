import React from 'react';
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

export default class EditLevel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lv: {
        wpm: 0,
        acc: 0,
        difficulty: 0
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let lv = {};
    lv[e.target.name] = e.target.value;
    this.setState({
      lv: Object.assign({}, this.state.lv, lv)
    });
  }

  render () {
    console.log(`Edit Level ${this.props.levelIndex}`);
    const styles = {
      root: {
        width: '100%',
        display: this.props.levelIndex !== -1 ? 'flex' : 'none',
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
          <h1>Level {this.props.levelIndex + 1}{this.props.part === 0 ? '' : `.${this.props.part}`}</h1>
          <h3>Passing Requirements</h3>
          <TextField
            name='wpm'
            value={this.state.lv.wpm}
            hintText='Required Words Per Minute'
            floatingLabelText='WPM'
            onChange={this.handleChange}
          /><br />
          <TextField
            name='acc'
            value={this.state.lv.acc}
            hintText='Required Accuracy %'
            floatingLabelText='Acc %'
            onChange={this.handleChange}
          />
          <h5>Difficulty</h5>
          <Slider style={styles.slider}
            name='difficulty'
            min={1}
            max={4}
            step={1}
            value={2}
          />
          <RaisedButton
            onTouchTap={() => {
              let lv = this.props.level;
              if (this.props.part === 0) {
                lv.wpm = this.state.lv.wpm;
                lv.acc = this.state.lv.acc;
              } else {
                lv.wpm[this.props.part-1] = this.state.lv.wpm;
                lv.acc[this.props.part-1] = this.state.lv.acc;
              }
              this.props.setLevel(this.props.level, lv);
              this.props.editLevel(-1, 0);
            }}
          >
            Save
          </RaisedButton>
      </Paper>
    );
  }
}
