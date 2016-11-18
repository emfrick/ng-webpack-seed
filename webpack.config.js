/**
 * Requires
 */
const webpack = require('webpack');
const path = require('path');

/**
 * Webpack Plugin Declarations
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Webpack Configuration
 */
const config = {
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'  // Allows static content to be hosted from this location
                     // HTML can now refer to /assets/img for all images
  },
  module: {
    preLoaders: [
    ],
    loaders: [
      {
        test: /\.sass$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'html', 'index.html'),
      inject: 'body'
    }),

    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'assets'),
      to: path.join(__dirname, 'dist', 'assets')
    }])
  ],
  devServer: {
    contentBase: './',  // Allows static content to be hosted from this location
                       // HTML can now refer to /assets/img for all images
    stats: 'minimal',
    outputPath: __dirname // To make copy-webpack-plugin happy
  }
};

module.exports = config;
