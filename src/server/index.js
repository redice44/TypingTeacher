// Bootstrapping Server
require('babel-register');
require('./server');
// Prevents issues with Server Side Rendering with importing scss files.
delete process.env.BROWSER;
