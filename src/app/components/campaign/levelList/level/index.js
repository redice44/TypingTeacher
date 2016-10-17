import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

export default class Level extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Paper zDepth={1}>
        <p>This is a placeholder Level.</p>
      </Paper>
    );
  }
};
