import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

import QuickPlay from '../../containers/quickPlay';
import CampaignList from '../campaign/campaignList';
import PlayerOverview from '../stats/playerOverview';

const Dashboard = () => {
  return (
    <Paper zDepth={1}>
      <QuickPlay /><br />
      <CampaignList />
      <PlayerOverview />
      <Link to='/'>Home</Link><br />
    </Paper>
  );
};

export default Dashboard;
