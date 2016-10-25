import React from 'react';
import classNames from 'classnames';

import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

const MapLevel = (props) => {
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

  if (props.path !== 0) {
    wpm = props.level.wpm[props.path-1];
    acc = props.level.acc[props.path-1];
  }
  if (props.path === 2) {
    tooltipPos = 'top-center';
  }

  return (
    <div style={styles.root}>
      <IconButton
        className={classNames({
          'level': true,
          'pulse-error': true,
        })}
        tooltip={`wpm: ${wpm} \nacc: ${acc}`}
        tooltipPosition={tooltipPos}
        onTouchTap={() => props.editLevel(props.lvNum) }
      >
        <EditIcon />
      </IconButton>
    </div>
  );
};

export default MapLevel;
