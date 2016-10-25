import request from 'superagent';

import accountUtil from '../user/constants';

const authenticate = (nextState, replace, cb) => {
  request
    .get(accountUtil.r.VALIDATE)
    .end((err, res) => {
      if (err) {
        return cb(err);
      }

      let data = JSON.parse(res.text);
      if (!data.authenticated) {
        console.log('redirecting');
        replace(`/`);
        return cb();
      }
      console.log('Authenticated');
      return cb();
    });
};

export default authenticate;
