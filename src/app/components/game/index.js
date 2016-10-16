import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
  margin: 12,
};

const Game = () => {
	
  return (
    <Paper zDepth={1}>
	  <RaisedButton
        label='Phrase Mode'
		style={style}
		primary={true}
      />	
	  <RaisedButton
        label='Time Trial Mode'
		style={style}
		primary={true}
      />
      <p>This is a placeholder game.</p>
      <Link to='/dashboard'>Dashboard Link</Link>
    </Paper>
  );
};

export default Game;
