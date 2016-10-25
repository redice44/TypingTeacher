import Express from 'express';
import passport from 'passport';

import Account from '../../../../database/account/model';
import Campaign from '../../../../database/campaign/model';

let router = Express.Router();

router.post('/register', (req, res, next) => {
  Account.register(
    new Account({
      username: req.body.username,
      email: req.body.email,
      wpm: 0,
      acc: 100,
      campaignList: []
    }),
    req.body.password,
    (err, account) => {
      if (err) {
        console.log(err);
        return res.json({error: err.message});
      }

      passport.authenticate('local')(req, res, () => {
        req.session.save((err) => {
          if (err) {
            return next(err);
          }

          res.json({
            message: 'Successfully added account',
            user: {
              name: account.username,
              wpm: account.wpm,
              acc: account.acc,
              campaignList: account.campaignList
            },
            authenticated: true
          });
        });
      });
    });
});

router.post('/signin', passport.authenticate('local'), (req, res, next) => {
  const q = {
    _id: { $in: req.user.campaignList }
  };

  Campaign.find(q, (err, campList) => {
    if (err) {
      return console.log(err);
    }

    console.log('getting campaigns for user', campList);
    res.json({
      authenticated: true,
      user: {
        name: req.user.username,
        wpm: req.user.wpm,
        acc: req.user.acc,
        campaignList: campList
      }
    });
  });
});

router.get('/signout', (req, res, next) => {
  req.logout();
  res.json({authenticated: false});
});

router.get('/validate', (req, res, next) => {
  if (!req.user) {
    return res.json({authenticated: false});
  }
  const q = {
    _id: { $in: req.user.campaignList }
  };

  Campaign.find(q, (err, campList) => {
    if (err) {
      return console.log(err);
    }

    console.log('getting campaigns for user', campList);
    res.json({
      authenticated: true,
      user: {
        name: req.user.username,
        wpm: req.user.wpm,
        acc: req.user.acc,
        campaignList: campList
      }
    });
  });
});

export default router;
