import bodyParser from 'body-parser';
import Express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import LocalStrategy from 'passport-local/lib/strategy';

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

  server.use((req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
  });

  server.use(passport.initialize());

  passport.use(new LocalStrategy((username, password, done) => {
    if (username === 'admin' && password === 'pass') {
      return done(null, {user: 'bob'});
    }
    return done(null, false, {message: 'Incorrect User'});
  }));

  server.post('/account/in', (req, res, next) => {
    passport.authenticate('local',
      (err, user, info) => {
        // TODO: Proper validation on db
        if (err) {
          next(err);
        } else if (!user) {
          res.json({message: 'Error, incorrect user'});
        } else {
          res.json({message: 'Success'});
        }
      })(req, res, next);
  });

  server.get('*', handleRender);

  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
});
