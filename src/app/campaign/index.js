import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';

const Campaign = () => {
  const c = classNames({
    'content': true
  });

  return (
    <div>
      <p>This is a placeholder Campaign Root Page.</p>
      <p>Not completely sure what to put here yet.</p>
      <p>Perhaps a list of all available campaigns with an easy add button to add them to your campaign list. I do not think it should be protected</p>
      <Link to='/'>Home Link</Link>
    </div>
  );
};

export default Campaign;
