var path = require('path');
var webpack = require('webpack');

var config = {
  entry: {
    'build/app/app': './src/app/app.js'
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
  }
};

module.exports = config;
