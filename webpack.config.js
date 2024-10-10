const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
require('dotenv').config({ path: './.env' });

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const config = {
  context: path.join(__dirname, '/src'),
  entry: 'index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  mode: process.env.NODE_ENV,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: ['./', 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader, options: {} },
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          ,
          'sass-loader',
        ],
      },
      { test: /\.(?:ico|png|jpg|gif|jpeg)$/, type: 'asset/resource' },
      { test: /\.(woff(2)?|svg|otf|ttf|eot)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      title: 'at-work',
      base: '/',
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map';
  config.devServer = {
    static: path.join(__dirname, 'dist'),
    port: 8080,
    hot: true,
    historyApiFallback: true,
  };
}

module.exports = config;
