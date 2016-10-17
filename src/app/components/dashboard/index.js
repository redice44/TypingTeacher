import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

import QuickPlay from '../../containers/quickPlay';
import CampaignList from '../campaign/campaignList';

const Dashboard = () => {
  return (
    <Paper zDepth={1}>
      <p>This is a placeholder dashboard.</p>
      <QuickPlay /><br />
      <CampaignList />
      <Link to='/'>Home</Link>
    </Paper>
  );
};

export default Dashboard;
