import Express from 'express';
import passport from 'passport';

import Account from '../../../../database/account/model';
import Campaign from '../../../../database/campaign/model';

let router = Express.Router();

router.post('/register', (req, res, next) => {
  console.log(req.body);
  Account.register(
    new Account({
      username: req.body.username,
      email: req.body.email,
      isTeacher: req.body.isTeacher,
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
              isTeacher: account.isTeacher,
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
        isTeacher: req.user.isTeacher,
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
        isTeacher: req.user.isTeacher,
        campaignList: campList
      }
    });
  });
});

router.post('/addCampaign', (req, res, next) => {
  const campId = req.body.campId;
  console.log(`Add campaign ID: ${campId}`);
  Campaign.findById(campId, (err, campaign) => {
    if (err) {
      // not found?
      if (err.name === 'CastError') {
        console.log('Cast error');
        return res.json({error: "not found"});
      }
      else {
        console.log(err);
        return next(err);
      }
    }

    if (campaign === null) {
      console.log('not found');
      return res.json({error: "not found"});
    }
    console.log('add campaign camp:', campaign);
    // add to user's campaign list
    Account.findOne({ 'username': req.body.username }, (err, user) => {
      if (err) {
        return next(err);
      }

      user.campaignList.push(campaign._id);
      user.save((err) => {
        if (err) {
          return next(err);
        }
        const q = {
          _id: { $in: user.campaignList }
        };

        Campaign.find(q, (err, campList) => {
          if (err) {
            return console.log(err);
          }

          console.log('getting campaigns for user', campList);
          res.json({
            user: {
              name: req.user.username,
              wpm: req.user.wpm,
              acc: req.user.acc,
              isTeacher: req.user.isTeacher,
              campaignList: campList
            }
          });
        });
      });
    });
  });
});

export default router;
