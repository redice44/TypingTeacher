import React from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';

import util from '../../../util/dashboard';

const Dashboard = (props) => {
  const c = classNames({
    'content': true
  });

  return (
    <div className={c}>
      <Tabs
        onChange={(tab) => props.updateTab(tab)}
        value={props.currentTab}
      >
        <Tab label="Dashboard" value={util.c.tabs.dashboard} />
        <Tab label="Campaigns" value={util.c.tabs.campaign} />
        <Tab label="Statistics" value={util.c.tabs.stats} />
      </Tabs>
      {props.children}
    </div>
  );
};

export default Dashboard;
