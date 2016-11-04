import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import debug from '../../common/debug';

export default class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      timer: props.timer,
	  timeTrialWasClicked: props.timeTrialWasClicked
    };
    this.timerInc = 100 / props.timer / 10;
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(0), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentWillUpdate(nextProps,nextState) {
	if(this.state.timeTrialWasClicked != nextProps.timeTrialWasClicked){
	  this.setState({timer: nextProps.timer, completed: 0, timeTrialWasClicked: nextProps.timeTrialWasClicked});
	  this.timerInc = 100 / nextProps.timer / 10;		
	  this.timer = setTimeout(() => this.progress(0), 100);
	}
  }
  
  progress(completed) { 
    if (completed > 100) {
      this.setState({completed: 100});
      clearTimeout(this.timer);
      this.props.sendResults();
	  this.setState({sum: completed}); 
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
