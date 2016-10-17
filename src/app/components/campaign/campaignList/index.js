import React from 'react';

import { List, ListItem } from 'material-ui/List';

const CampaignList = () => {
  // TODO: Actually get the campaigns from the user's account
  const campaignNum = 5;
  let campaigns = [];

  for (let i = 0; i < campaignNum; i++) {
    campaigns.push(
      <ListItem primaryText={`Campaign ${i}`} />
    );
  }

  return (
    <div style={{width: '250px'}}>
      <List>
        {campaigns}
      </List>
    </div>
  );
};

export default CampaignList;
