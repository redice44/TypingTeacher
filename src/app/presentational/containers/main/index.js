import React from 'react';
import classNames from 'classnames';

import Game from '../../containers/game';

const Main = (props) => {
  const c = classNames({
    'content': true
  });

  return (
    <div className={c}>
      <Game />
    </div>
  );
};

export default Main;
