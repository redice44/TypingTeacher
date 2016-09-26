import Express from 'express';

const server = Express();
const SERVER_PORT = 3000;

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
