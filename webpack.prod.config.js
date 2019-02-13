const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const { destDir } = require('./config');

const config = {
  mode: 'production',
  entry: [
    './src/index.js'
  ],
  output: {
    path: destDir,
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['eslint-loader'],
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Prod build',
      template: 'index.ejs',
    })
  ]
};

module.exports = config;
