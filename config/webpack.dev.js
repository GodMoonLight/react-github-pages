const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.js');

const root = path.resolve(__dirname, '..');

const publicPath = path.resolve(root, 'dist');

module.exports = merge(baseConfig('dev'), {
  mode: 'development',
  devServer: {
    port: '3000',
    contentBase: publicPath,
    historyApiFallback: true,
  },
});
