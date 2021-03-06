var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var sassLoaders = [
  'css-loader',
  'sass-loader?includePaths[]=' + path.resolve(__dirname, './src')
];

var config = {
  entry: {
    'build/assets/js/client': './src/app/client.js',
    'build/assets/js/vendor': [
      'classnames',
      'd3',
      'react',
      'react-d3',
      'react-d3-basic',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'react-motion',
      'react-tap-event-plugin',
      "react-swipeable-views",
      "react-tap-event-plugin",
      'redux',
      'superagent',
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
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('build/assets/css/app.css', {
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin('build/assets/js/vendor',
      'build/assets/js/vendor.js'),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        DEBUG: JSON.stringify(true)
      }
    })
  ]
};

module.exports = config;
