import bodyParser from 'body-parser';
import Express from 'express';
import Session from 'express-session';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import LocalStrategy from 'passport-local/lib/strategy';

import Account from '../database/account/model';

const jsonParser = bodyParser.json();
// TODO: Pull database into a secret.
const mongodbUri = 'mongodb://localhost/typing-teacher';
const server = Express();
const SERVER_PORT = 3000;

import handleRender from './render/handleRender';

mongoose.connect(mongodbUri, (err) => {
  // TODO: Handle db conect error elegantly.
  if (err) {
    return err;
  }

  const db = mongoose.connection;

  // TODO: Extract Server Settings
  // Server Settings
  // TODO: Handle build files more elegantly
  server.use(Express.static(path.join(__dirname, '..', '..',
    'build', 'assets')));
  server.use(jsonParser);
  // TODO: Make secret...secret
  server.use(Session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    // TODO: Be sure to update this life time to something reasonable.
    cookie: {
      maxAge: 1 * 60 * 1000
    }
  }));
  server.use(passport.initialize());
  server.use(passport.session());

  server.use((req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
  });

  /*
  passport.use(new LocalStrategy((username, password, done) => {
    if (username === 'admin' && password === 'pass') {
      return done(null, {user: 'bob'});
    }
    return done(null, false, {message: 'Incorrect User'});
  }));
  */
  passport.use(Account.createStrategy());
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());

  server.post('/register', (req, res, next) => {
    Account.register(new Account({username: req.body.username}),
      req.body.password,
      (err, account) => {
        if (err) {
          return res.json({error: err.message});
        }

        passport.authenticate('local')(req, res, () => {
          req.session.save((err) => {
            if (err) {
              return next(err);
            }

            // TODO: Prompt client side dashboard load.
            res.json({message: 'Successfully added account', account: account});
          });
        });
      });
  });

  // TODO: Gracefully handle unsucessful logins
  server.post('/signin', passport.authenticate('local'), (req, res, next) => {
    res.json({message: 'Success'});
  });

  server.get('/signout', (req, res, next) => {
    req.logout();
    res.json({message: 'logged out'});
  });



/*
  server.post('/signin', (req, res, next) => {
    passport.authenticate('local',
      (err, user, info) => {
        console.log(err, user, info);
        if (err) {
          return next(err);
        }

        if (!user) {
          // TODO: Handle various passport-local-mongoose errors
          return res.json({error: info});
        }

        req.login(user, (err) => {
          if (err) {
            return next(err);
          }

          res.json({message: 'Success'});
        });
      })(req, res, next);
  });
*/
  server.get('/verify', (req, res, next) => {
    // TODO: Extract to reusable function for verifying session
    if (!req.user) {
      return res.json({error: 'Not Logged In'});
    }

    res.json({message: req.user});
  });

  server.get('*', handleRender);

  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
});
