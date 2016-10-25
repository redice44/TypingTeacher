import React from 'react';

import Player from '../../components/player';

const Overview = (props) => {
  return (
    <div>
      <Player player={props.player} />
    </div>
  );
};

export default Overview;
