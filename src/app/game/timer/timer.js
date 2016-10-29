import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import debug from '../../common/debug';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: props.timer
    };
    this.timerInc = 100 / props.timer / 10;
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(0), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
      clearTimeout(this.timer);
      this.props.sendResults();
    } else {
      this.setState({completed});
      this.timer = setTimeout(() => this.progress(completed + this.timerInc), 100);
    }
  }

  render() {
    if (debug) {
      //console.log('=== Render Game/Timer', this.props);
    }

    return(
      <div>
        <p>Time Remaining: {this.state.timer - Math.floor(this.state.completed / 100 * this.state.timer)} s</p>
        <LinearProgress mode="determinate" value={this.state.completed} />
      </div>
    );
  }
}
