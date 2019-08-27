const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// const alias = require('./webpack/alias.js');
const alias = {
  actions: path.resolve(__dirname, './src/actions'),
  constants: path.resolve(__dirname, './src/constants'),
  sagas: path.resolve(__dirname, './src/sagas'),
  reducers: path.resolve(__dirname, './src/reducers'),
  components: path.resolve(__dirname, './src/components'),
  connectedComponents: path.resolve(__dirname, './src/connectedComponents'),
  containers: path.resolve(__dirname, './src/containers'),
  library: path.resolve(__dirname, './src/library'),
  images: path.resolve(__dirname, './src/images'),
  config: path.resolve(__dirname, './src/config'),
  shapes: path.resolve(__dirname, './src/shapes')
};

process.env.NODE_ENV = 'development';

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'cheap-module-source-map',
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    stats: 'minimal',
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.DefinePlugin({
      __DEV__: true,
      __NODE_ENV__: '"development"'
    })
  ],

  // resolve: {
  //   alias: alias,
  //   modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  //   extensions: ['.js']
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]'
              }
            }
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        use: ['url-loader']
      }
    ]
  }
};
