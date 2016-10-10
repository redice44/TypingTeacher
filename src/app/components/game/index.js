import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

const Game = () => {
  return (
    <Paper zDepth={1}>
      <p>This is a placeholder game.</p>
      <Link to='/dashboard'>Dashboard Link</Link>
    </Paper>
  );
};

export default Game;
