const webpack = require('webpack');
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const BUILD_DIR = path.resolve(__dirname, 'dist');

const dev = process.env.DEV === '1';

const config = {
  entry: path.resolve(__dirname, 'src/ui/index.js'),
  devtool: 'source-map',
  mode: dev ? 'development' : 'production',
  output: {
    path: BUILD_DIR,
    filename: 'ui-bundle.js'
  },
  plugins: dev
    ? [
      new NodePolyfillPlugin({ excludeAliases: ['process'] }),
    ]
    : [],
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'src/ui'),
      }
    ]
  },
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'electron-renderer',
  externals: {
    electron: 'require("electron")',
    fs: 'require("fs")',
    os: 'require("os")',
    path: 'require("path")',
  },
};

module.exports = config;
