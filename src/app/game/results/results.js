import React from 'react';

const debug = process.env.BROWSER && process.env.DEBUG;

const Results = (props) => {
  if (debug) {
    console.log('=== Render: Game/Results', props);
  }
  return (
    <div>
      <h3>You typed</h3>
      <ul>
        <li>{props.originalPhrase}</li>
        <li>in {props.timer} seconds</li>
        <li>at {props.wpm} words per minute</li>
        <li>with an accuracy of {props.acc}%</li>
      </ul>
    </div>
  );
};

export default Results;
