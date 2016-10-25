import React from 'react';

const playerOverviewStats = (props) => {
  return (
    <div>
      <p>Welcome { props.user.name }</p>
      <p>WPM: { props.user.wpm }</p>
      <p>Acc: { props.user.acc }</p>
    </div>
  );
};

export default playerOverviewStats;
