import React from 'react';

import TextField from 'material-ui/TextField';

const MapLevel = (props) => {
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    textfield: {
      width: '80%'
    }
  };
  return (
    <div style={styles.root}>
      <TextField
        name='wpm'
        floatingLabelText='Words per Minute'
        value={props.level.wpm}
        style={styles.textfield}
      />
      <TextField
        name='acc'
        floatingLabelText='Accuracy'
        value={props.level.acc}
        style={styles.textfield}
      />
    </div>
  );
};

export default MapLevel;
