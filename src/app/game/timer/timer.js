import React from 'react';
import debug from '../../common/debug';

const Timer = (props) => {
  if (debug) {
    console.log('=== Render Game/Timer', props);
  }

  return(
    <div>
      <h1>Time: {props.timer} seconds</h1>
    </div>
  );
}

export default Timer;
