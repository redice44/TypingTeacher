import React from 'react';

import CampaignList from '../../campaign/campaignList';
import SingleCampaign from '../../campaign/single/singleCampaign';

const playerOverviewStats = (props) => {
  if (process.env.BROWSER && process.env.DEBUG) {
    console.log('=== Render: dashboard/overview', props);
  }
  const styles = {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    sections: {
      width: '100%'
    }
  };
  let recentCamp;
  if (props.user.campaignList && props.user.campaignList.length > 0) {
    recentCamp = <SingleCampaign campaign={props.user.campaignList[0]} />;
  }

  console.log(recentCamp);

  return (
    <div style={styles.root}>
      <div style={styles.sections}>
        <h1>Welcome { props.user.name }</h1>
        <p>WPM: { props.user.wpm }</p>
        <p>Acc: { props.user.acc }</p>
      </div>
      <div style={styles.sections}>
        <h1>Most Recent Campaign</h1>
        {recentCamp}
      </div>
    </div>
  );
};

export default playerOverviewStats;
