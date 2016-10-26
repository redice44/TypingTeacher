import React from 'react';

import CampaignList from '../../campaign/campaignList';

const playerOverviewStats = (props) => {
  const styles = {
    root: {
      display: 'flex'
    },
    sections: {
      flexGrow: 1
    }
  };
  console.log('Current User', props.user);
  return (
    <div style={styles.root}>
      <div style={styles.sections}>
        <p>Welcome { props.user.name }</p>
        <p>WPM: { props.user.wpm }</p>
        <p>Acc: { props.user.acc }</p>
      </div>
    </div>
  );
};

export default playerOverviewStats;
