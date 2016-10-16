import React from 'react';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const QuickPlay = () => {
  return (
    <div>
      <RaisedButton
        label='Phrase'
      />
      <RaisedButton
        label='Time Trial'
      />
    </div>
  );
};

export default QuickPlay;
