import React from 'react';
import request from 'superagent';
import { Link } from 'react-router';
import classNames from 'classnames';
import RaisedButton from 'material-ui/RaisedButton';

import CampaignMap from './map';
import CreateCampaign from './create';

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

      <CreateCampaign />
    </div>
  );
};

export default Campaign;
