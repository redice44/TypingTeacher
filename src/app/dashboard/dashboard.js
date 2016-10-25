import React from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';

import Campaign from '../campaign';
import Overview from './playerOverview';
import Stats from '../stats';

import util from './constants';

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
        <Tab label="Statistics" value={util.c.tabs.stats} />
        <Tab label="Dashboard" value={util.c.tabs.dashboard} />
        <Tab label="Campaigns" value={util.c.tabs.campaign} />
      </Tabs>
      <SwipeableViews
        index={props.currentTab}
        onChangeIndex={(tab) => props.updateTab(tab)}
      >
        <div>
          <Stats />
        </div>
        <div>
          <Overview />
        </div>
        <div>
          <Campaign />
        </div>
      </SwipeableViews>
    </div>
  );
};

export default Dashboard;
