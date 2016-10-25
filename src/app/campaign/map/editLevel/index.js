import React from 'react';
import classNames from 'classnames';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

const EditLevel = (props) => {
  console.log(`Edit Level ${props.level}`);
  const styles = {
    root: {
      width: '100%',
      display: props.level !== -1 ? 'flex' : 'none',
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
        <h1>Level {props.level + 1}</h1>
        <h3>Passing Requirements</h3>
        <TextField
          name='wpm'
          hintText='Required Words Per Minute'
          floatingLabelText='WPM'
        /><br />
        <TextField
          name='acc'
          hintText='Required Accuracy %'
          floatingLabelText='Acc %'
        />
        <h5>Difficulty</h5>
        <Slider style={styles.slider}
          min={1}
          max={4}
          step={1}
          value={2}
        />
        <RaisedButton
          onTouchTap={() => props.editLevel(-1)}
        >
          Save
        </RaisedButton>
    </Paper>
  );
};

export default EditLevel;
