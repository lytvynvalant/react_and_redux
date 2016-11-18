'use strict';

const path = require('path');
const entryPoint = './index';
module.exports = {
  context: path.join(__dirname, '/frontend'),

  watch: true,

  entry: {
    index: entryPoint
  },

  output: {
    filename: '[name].js'
  },

  devtool: 'source-map',

  module: {
    preLoaders: [
      {
        test:    /\.js$/,
        loaders: ['eslint'],
        include: [
          path.resolve(__dirname, 'frontend')
        ]
      }
    ],
    loaders: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        loader:  'babel',
        query:   {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },

  // define root folders for dependencies
  resolve: {
    root: path.resolve('./frontend')
  },

  devServer: {
    host:               'localhost',
    port:               3000,
    contentBase:        './frontend',
    headers:            { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: {
      index: entryPoint + '.html'
    }
  }
};
