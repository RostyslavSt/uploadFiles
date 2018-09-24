// npm i webpack webpack-cli @babel/core @babel/plugin-proposal-object-rest-spread @babel/preset-env babel-loader -D

const loaders = require('./webpack.config.loaders');
const path = require("path");
// const webpack = require("webpack");
// const webpack_rules = [];
const webpackOption = {
    mode: 'development',
  entry: "./src/js/for_develop.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
   },
  module: {
    rules: [
        loaders.babelLoader,
        // loaders.ESLintLoader,
        loaders.cssLoader,
        loaders.imgLoader
    ]
  },
  optimization: {
    minimize: false
  },
  watch: true
};

// webpack_rules.push(babelLoader, cssLoader);

module.exports = webpackOption;