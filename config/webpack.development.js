'use strict'

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = require('./webpack.base')

config.debug = true
config.devServer = {
  contentBase: 'public/',
  host: '0.0.0.0',
  historyApiFallback: true,
  noInfo: true
}

config.devtool = 'eval-source-map'

config.plugins = [
  ...config.plugins,
  new webpack.DefinePlugin({
    __DEBUG__: true
  }),
  new HtmlWebpackPlugin({
    title: 'HRS+',
    template: 'template.html',
    inject: true
  })
]

module.exports = config
