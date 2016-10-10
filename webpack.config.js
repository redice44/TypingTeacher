var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    'build/assets/js/client': './src/app/client.js',
    'build/assets/js/vendor': [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-tap-event-plugin',
      'redux',
      'material-ui'
    ]
  },
  output: {
    path: './',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('build/assets/js/vendor',
      'build/assets/js/vendor.js')
  ]
};

module.exports = config;
