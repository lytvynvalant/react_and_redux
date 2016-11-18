const webpack = require('webpack');
const path = require("path");

var optionalSettings = {
  enable:true,
  console:{
    enable:true,
    color:'red'
  },
  regex:{
    startWith:'STARTwithThis',
    safe:true
  }
};

module.exports = function (config) {
  config.set({
    autoWatch: true,

    browsers: ['Chrome'],

    frameworks: ['mocha'],

    files: [
      'test.webpack.js'
    ],

    preprocessors: {
      'test.webpack.js': ['webpack', 'sourcemap']
    },

    webpack: {
      devtool: "source-map",
      module: {
        preLoaders: [
          {
            test:    /\.js$/,
            loaders: ['eslint'],
            include: [
              path.resolve(__dirname, 'test')
            ]
          }
        ],
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              presets: ['es2015', 'react'],
              plugins: ["transform-object-rest-spread"]
            }
          },
          {
            test: /\.js$/,
            loader: 'webpack-inject-loader?'+JSON.stringify(optionalSettings )
          },
          {
            test: /\.json$/,
            loader: 'json'
          },
          {
            test: /sinon.*\.js$/,
            loader: "imports?define=>false"
          }
        ]
      },
      //define root folders for dependencies
      resolve: {
        root: path.resolve('./frontend')
      }
    }
  });
};