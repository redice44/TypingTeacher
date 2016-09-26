var ncp = require('ncp').ncp;

ncp('./src/server/', './build/server/', function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Server Copy Complete.');
});
