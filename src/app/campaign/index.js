import React from 'react';
import request from 'superagent';
import { Link } from 'react-router';
import classNames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignList from './campaignList';
import CampaignCreate from './create';

export default class Campaign extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const c = classNames({
      'content': true
    });

    const styles = {
      root: {
        margin: '20px'
      }
    };

    return (
      <div>
        <CampaignCreate />
        <CampaignList />
      </div>
    );
  };
}
