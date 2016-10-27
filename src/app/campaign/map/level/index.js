import React from 'react';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

import util from '../../constants';

const MapLevel = (props) => {
  console.log('=== Render: campaign/map/level', props);

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
  let lv = {};
  lv.wpm = props.level.wpm;
  lv.acc = props.level.acc;
  lv.difficulty = props.level.difficulty;
  lv.timer = props.level.timer;
  let tooltipPos = 'bottom-center';
  lv.levelState = props.level.levelState;

  switch (props.part) {
    case 1:
      lv.wpm = props.level.part1.wpm;
      lv.acc = props.level.part1.acc;
      lv.levelState = props.level.part1.levelState;
      break;
    case 2:
      lv.wpm = props.level.part2.wpm;
      lv.acc = props.level.part2.acc;
      lv.levelState = props.level.part2.levelState;
      tooltipPos = 'top-center';
      break;
    default:
      // Do nothing
  }

  const classes = classNames({
    'level': true,
    'pulse-red': lv.levelState === util.c.levelState.needsSave,
    'pulse-green': lv.levelState === util.c.levelState.saved ||
      lv.levelState === util.c.levelState.completed,
    'pulse-blue': lv.levelState === util.c.levelState.active
  });

  return (
    <div style={styles.root}>
      <IconButton
        className={classes}
        tooltip={`wpm: ${lv.wpm} \nacc: ${lv.acc}`}
        tooltipPosition={tooltipPos}
        onTouchTap={() => {
          if (props.isEditing) {
            props.editLevel(props.lvNum, props.part);
          } else {
            props.setGame(lv)
          }
        }}
      >
        {props.isEditing ? <EditIcon /> : props.lvNum }
      </IconButton>
    </div>
  );
};

export default MapLevel;
