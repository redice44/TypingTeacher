import Express from 'express';
import passport from 'passport';

import Account from '../../../../database/account/model';

let router = Express.Router();

router.post('/register', (req, res, next) => {
  Account.register(
    new Account({
      username: req.body.username,
      email: req.body.email
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

          res.json({message: 'Successfully added account', account: account});
        });
      });
    });
});

router.post('/signin', passport.authenticate('local'), (req, res, next) => {
  res.json({authenticated: true, user: req.user});
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
    user: req.user
  });
});

export default router;
