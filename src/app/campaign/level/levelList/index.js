import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

import Level from '../';

export default class LevelList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Paper zDepth={1}>
        {
          this.props.levels.map((level, i) => (
            <div key={i}>
              <p>Level {i}</p>
              <p>WPM: {level.wpm}</p>
              <p>Acc: {level.acc}</p>
            </div>
          ))
        }
      </Paper>
    );
  }
};
