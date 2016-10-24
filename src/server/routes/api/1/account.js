import Express from 'express';
import passport from 'passport';

import Account from '../../../../database/account/model';

let router = Express.Router();

router.post('/register', (req, res, next) => {
  Account.register(
    new Account({
      username: req.body.username,
      email: req.body.email,
      wpm: 0,
      acc: 100
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
              acc: account.acc
            },
            authenticated: true
          });
        });
      });
    });
});

router.post('/signin', passport.authenticate('local'), (req, res, next) => {
  res.json({
    authenticated: true,
    user: {
      name: req.user.username,
      wpm: req.user.wpm,
      acc: req.user.acc
    }
  });
});

router.get('/signout', (req, res, next) => {
  req.logout();
  // TODO: Reponse should update store
  res.json({authenticated: false});
});

router.get('/validate', (req, res, next) => {
  if (!req.user) {
    return res.json({authenticated: false});
  }

  res.json({
    authenticated: true,
    user: {
      name: req.user.username,
      wpm: req.user.wpm,
      acc: req.user.acc
    },
  });
});

export default router;
