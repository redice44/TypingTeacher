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

  return (
    <div style={styles.root}>
      <div style={styles.sections}>
        <p>Welcome { props.user.name }</p>
        <p>WPM: { props.user.wpm }</p>
        <p>Acc: { props.user.acc }</p>
      </div>
      <div style={styles.sections}>
        <CampaignList />
      </div>
    </div>
  );
};

export default playerOverviewStats;
