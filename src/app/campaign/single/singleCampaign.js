import React from 'react';

import CampaignMap from '../map';

const singleCampaign = (props) => {
  const camp = props.campaign;
  console.log('single campaign', camp);
  return (
    <div style={{padding: '20px'}}>
      <p>ID: {camp._id}</p>
      <p>Name: {camp.name}</p>
      <CampaignMap levels={camp.levels} />
    </div>
  );
};

export default singleCampaign;
