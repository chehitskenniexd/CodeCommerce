'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  node: {
    fs: "empty"
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /json$/,
        loader: 'json'
      },
      {
        test: /jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
};
