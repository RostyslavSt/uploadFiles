// npm i webpack webpack-cli @babel/core @babel/plugin-proposal-object-rest-spread
//  @babel/preset-env babel-loader -D

const path = require('path');
const loaders = require('./webpack.config.loaders');
// const webpack = require("webpack");
// const webpack_rules = [];
const webpackOption = {
  mode: 'production',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'prod'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      loaders.babelLoader,
      loaders.cssLoader,
      // loaders.imgLoader,
      loaders.urlLoader,
    ],
  },
  optimization: {
    minimize: false,
  },
};

// webpack_rules.push(babelLoader, cssLoader);

module.exports = webpackOption;
