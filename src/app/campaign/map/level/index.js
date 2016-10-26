import React from 'react';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import util from '../../constants';

const MapLevel = (props) => {
  console.log('=== Render: campaign/map/level');

  const styles = {
    root: {
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '3px solid rgba(0, 0, 0, 0.5)',
      borderRadius: '50%'
    },
    textfield: {
      width: '80%'
    }
  };
  let wpm = props.level.wpm;
  let acc = props.level.acc;
  let tooltipPos = 'bottom-center';
  let levelState = props.level.levelState;

  switch (props.part) {
    case 1:
      wpm = props.level.part1.wpm;
      acc = props.level.part1.acc;
      levelState = props.level.part1.levelState;
      break;
    case 2:
      wpm = props.level.part2.wpm;
      acc = props.level.part2.acc;
      levelState = props.level.part2.levelState;
      tooltipPos = 'top-center';
      break;
    default:
      // Do nothing
  }

  const classes = classNames({
    'level': true,
    'pulse-red': levelState === util.c.levelState.needsSave,
    'pulse-green': levelState === util.c.levelState.saved ||
      levelState === util.c.levelState.completed,
    'pulse-blue': levelState === util.c.levelState.active
  });

  return (
    <div style={styles.root}>
      <IconButton
        className={classes}
        tooltip={`wpm: ${wpm} \nacc: ${acc}`}
        tooltipPosition={tooltipPos}
        onTouchTap={() => {
          if (props.isEditing) {
            props.editLevel(props.lvNum, props.part);
          } else {
            // play damn game
          }
        }}
      >
        {props.isEditing ? <EditIcon /> : props.lvNum }
      </IconButton>
    </div>
  );
};

export default MapLevel;
