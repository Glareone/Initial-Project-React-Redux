const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const { destDir, srcDir, development: { host, port } } = require('./config');

const config = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    host,
    port,
    hot: true,
    historyApiFallback: true
  },
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,  
    'webpack/hot/only-dev-server',
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
      title: 'Development build',
      template: 'index.ejs',
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;
