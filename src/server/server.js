import bodyParser from 'body-parser';
import Express from 'express';
import Session from 'express-session';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import LocalStrategy from 'passport-local/lib/strategy';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Account from '../database/account/model';
import auth from './util/auth.js';

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

  passport.use(Account.createStrategy());
  passport.serializeUser(Account.serializeUser());
  passport.deserializeUser(Account.deserializeUser());

  // Needed for onTouchTap
  // http://stackoverflow.com/a/34015469/988941
  injectTapEventPlugin();

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
    // TODO: Reponse should update store
    res.json({message: 'Success'});
  });

  server.get('/signout', (req, res, next) => {
    req.logout();
    // TODO: Reponse should update store
    res.json({message: 'logged out'});
  });

  server.get('/verify', (req, res, next) => {
    if (!req.user) {
      return res.json({authenticated: false});
    }
    // TODO: Reponse should update store
    res.json({
      authenticated: true,
      user: req.user
    });
  });

  // TODO: Someday sync these auth routes gracefully

  // REMINDER: Adjustments need to be done here and in the route file.
  // Authenticated Routes
  server.get('/dashboard', auth, handleRender);

  // Unauthenticated Routes
  server.get('*', handleRender);

  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
});
