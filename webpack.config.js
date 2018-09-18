// npm i webpack webpack-cli @babel/core @babel/plugin-proposal-object-rest-spread @babel/preset-env babel-loader -D

const path = require("path");
const webpack = require("webpack");
const webpack_rules = [];
const webpackOption = {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    libraryTarget: "commonjs2"

  },
  module: {
    rules: webpack_rules
  },
  optimization: {
    minimize: false
  },
  watch: true
};

let babelLoader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"]
    }
  }
};

let cssLoader = {
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

webpack_rules.push(babelLoader, cssLoader);

module.exports = webpackOption;