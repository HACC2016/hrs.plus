'use strict'

const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AppcacheWebpackPlugin = require('appcache-webpack-plugin')

let config = require('./webpack.base')

config.debug = false
config.devtool = 'source-map'
config.output = {
  path: 'dist/',
  filename: '[name].[hash].js'
}

config.plugins = [
  ...config.plugins,
  new webpack.DefinePlugin({
    __DEBUG__: false
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    sourceMap: true,
    compress: { warnings: false }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextWebpackPlugin('[name].[contenthash].css'),
  new AppcacheWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'HRS+',
    template: 'template.html',
    inject: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true
    }
  })
]

config.vue.loaders = {
  js: 'babel', // 'babel!eslint',
//  scss: 'style!css!sass',
  css: ExtractTextWebpackPlugin.extract('vue-style', 'css?sourceMap')

}

module.exports = config
