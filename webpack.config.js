(() => {
  'use strict';

  const path = require('path');
  const webpack = require('webpack');
  const CopyWebpackPlugin = require('copy-webpack-plugin');
  const MiniCssExtractPlugin = require('mini-css-extract-plugin');

  const { config, resolve } = require('./common.config');

  const webpackConfig = {
    mode: 'development',

    watch: true,
    watchOptions: {
      ignored: /node_modules/,
    },

    entry: [resolve(config.srcDir, 'index.tsx')],

    devtool: 'source-map',

    output: {
      filename: `${config.appName}.min.js`,
      publicPath: '',
      path: config.distDir,
    },

    devServer: {
      port: config.devPort,
      historyApiFallback: true,
      inline: true,
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
      modules: [resolve('node_modules'), config.srcDir],
      alias: {
        [config.appPrefix]: config.srcDir,
        scss: resolve(config.srcDir, 'scss-common'),
      },
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
          exclude: /node_modules/,
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
        {
          test: /\.(c|sa|sc)ss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },

    plugins: [
      new CopyWebpackPlugin([resolve(config.srcDir, 'index.html')], {}),
      new MiniCssExtractPlugin({
        filename: `${config.appName}.css`,
      }),
    ],
  };

  module.exports = webpackConfig;
})();
