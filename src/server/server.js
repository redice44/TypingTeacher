import Express from 'express';
import mongoose from 'mongoose';

// TODO: Pull database into a secret.
const mongodbUri = 'mongodb://localhost/typing-teacher';
const server = Express();
const SERVER_PORT = 3000;

mongoose.connect(mongodbUri, (err) => {
  // TODO: Handle db conect error elegantly.
  if (err) {
    return err;
  }

  const db = mongoose.connection;
  server.use((req, res, next) => {
    console.log(`${req.method}: ${req.originalUrl}`);
    next();
  });

  server.get('*', (req, res) => {
    res.end(`Hello world. Environment: ${process.env.NODE_ENV}`);
  });

  server.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}.`);
  });
});
