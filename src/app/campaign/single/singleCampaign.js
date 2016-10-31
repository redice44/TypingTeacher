import React from 'react';

import CampaignMap from '../map';

const singleCampaign = (props) => {
  if (process.env.BROWSER && process.env.DEBUG) {
    console.log('=== Render: Campaign/Single', props);
  }
  const camp = props.campaign;
  return (
    <div style={{padding: '20px', width: '100%', textAlign: 'center', boxSizing: 'border-box'}}>
      <h2>{camp.name}</h2>
      <CampaignMap levels={camp.levels} setGame={props.setGame}/>
    </div>
  );
};

export default singleCampaign;
