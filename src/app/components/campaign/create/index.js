import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

const CreateCampaign = () => {
  return (
    <Paper zDepth={1}>
      <p>This is a placeholder Creating a campaign.</p>
      <Link to='/'>Home Link</Link>
    </Paper>
  );
};

export default CreateCampaign;
