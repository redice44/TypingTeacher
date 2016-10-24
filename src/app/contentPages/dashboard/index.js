import React from 'react';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';

const Dashboard = (props) => {
  const c = classNames({
    'content': true
  });

  return (
    <div className={c}>
      <Tabs
        onChange={(tab) => console.log(tab)}
        value={props.currentTab}
      >
        <Tab label="Dashboard" value={0} />
        <Tab label="Campaigns" value={1} />
        <Tab label="Statistics" value={2} />
      </Tabs>
      {props.children}
    </div>
  );
};

export default Dashboard;
