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

import API from './routes/api/1';

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
    cookie: {
      maxAge: 60 * 60 * 1000
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

  server.use('/api/1', API);

  // TODO: Someday sync these auth routes gracefully

  // REMINDER: Adjustments need to be done here and in the route file.
  // Authenticated Routes
  // server.get('/dashboard', auth, handleRender);
  //server.get('/campaign/create', auth, handleRender);

  // Unauthenticated Routes
  server.get('*', handleRender);

  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
});
