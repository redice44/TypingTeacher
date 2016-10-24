import React from 'react';
import classNames from 'classnames';

import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';

export default class DashboardNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const styles = {
      root: {
        minHeight: '100%',
        marginTop: '-64px',
        paddingTop: '64px',
        marginBottom: '-200px'
      }
    };
    const c = classNames({
      'content': true
    });
    return (
      <div className={c}>
        <Tabs
          onChange={(tab) => this.props.updateTab(tab)}
          value={this.props.currentTab}
        >
          <Tab label="Dashboard" value={0} />
          <Tab label="Campaigns" value={1} />
          <Tab label="Statistics" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.props.currentTab}
          onChangeIndex={(tab) => this.props.updateTab(tab)}
        >
          <div>
            Dashboard
          </div>
          <div>
            Campaigns
          </div>
          <div>
            Statistics
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
