import React from 'react';
import request from 'superagent';
import { Link } from 'react-router';
import classNames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignList from './campaignList';
import CampaignMap from './map';

const Campaign = () => {
  const c = classNames({
    'content': true
  });

  return (
    <div>
      <RaisedButton
        onTouchTap={() => {
          console.log('clicky');
          request
            .post('/api/1/campaign/test')
            .end((err, res) => {
              if (err) {
                return console.log(err);
              }

              const data = JSON.parse(res.text);
              console.log(data);
            })
        }}
      >Clicky
      </RaisedButton>
      <CampaignMap />
    </div>
  );
};

export default Campaign;
