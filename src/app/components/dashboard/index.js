import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

import QuickPlay from '../../containers/quickPlay';
import CampaignList from '../campaign/campaignList';
import PlayerOverview from '../stats/playerOverview';

const Dashboard = () => {
  return (
    <Paper zDepth={1}>
      <p>This is a placeholder dashboard.</p>
      <QuickPlay /><br />
      <CampaignList />
      <PlayerOverview />
      <Link to='/'>Home</Link><br />
      <Link to='/campaign'>Campaign</Link><br />
      <Link to='/campaign/create'>New Campaign</Link>
    </Paper>
  );
};

export default Dashboard;
