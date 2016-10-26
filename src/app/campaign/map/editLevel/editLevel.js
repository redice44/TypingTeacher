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
        wpm: '',
        acc: '',
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

  componentWillReceiveProps(nextProps) {
    console.log('will mount', nextProps);
    let lv = nextProps.levels[nextProps.editLevelIndex === -1 ? 0 : nextProps.editLevelIndex];
    switch (nextProps.part) {
      case 1:
        lv.wpm = lv.part1.wpm;
        lv.acc = lv.part1.acc;
        break;
      case 2:
        lv.wpm = lv.part2.wpm;
        lv.acc = lv.part2.acc;
        break;
      default:
        // Do nothing
    }
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
            onChange={this.handleChange}
          /><br />
          <TextField
            name='acc'
            value={this.state.lv.acc}
            floatingLabelText='Required Accuracy %'
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
          <div>
            <RaisedButton
              onTouchTap={() => {
                let lv = this.props.levels[this.props.editLevelIndex];
                switch (this.props.part) {
                  case 0:
                    lv.wpm = this.state.lv.wpm;
                    lv.acc = this.state.lv.acc;
                    break;
                  case 1:
                    lv.part1.wpm = this.state.lv.wpm;
                    lv.part1.acc = this.state.lv.acc;
                    lv.wpm = -1;
                    lv.acc = -1;
                    break;
                  case 2:
                    lv.part2.wpm = this.state.lv.wpm;
                    lv.part2.acc = this.state.lv.acc;
                    lv.wpm = -1;
                    lv.acc = -1;
                    break;
                  default:
                    // Do nothing
                }
                this.props.setLevel(this.props.editLevelIndex, lv);
                this.props.editLevel(-1, 0);
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
