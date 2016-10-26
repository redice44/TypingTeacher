import React from 'react';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

const MapLevel = (props) => {
  console.log('=== Render: Level');
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

  switch (props.part) {
    case 1:
      wpm = props.level.part1.wpm;
      acc = props.level.part1.acc;
      break;
    case 2:
      wpm = props.level.part2.wpm;
      acc = props.level.part2.acc;
      tooltipPos = 'top-center';
      break;
    default:
      // Do nothing
  }
  console.log('==========',props);
  return (
    <div style={styles.root}>
      <IconButton
        className={classNames({
          'level': true,
          'pulse-error': true,
        })}
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
