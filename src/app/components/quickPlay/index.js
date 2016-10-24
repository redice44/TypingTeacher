import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const QuickPlay = (props) => {
  return (
    <div>
      <RaisedButton
        label='Phrase'
        onTouchTap={() => props.playPhrase()}
      />
      <RaisedButton
        label='Time Trial'
        onTouchTap={() => props.playTime()}
      />
    </div>
  );
};

export default QuickPlay;
