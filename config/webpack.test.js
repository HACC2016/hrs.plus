const path = require('path')
const webpack = require('webpack')

const config = require('./webpack.base')
delete config.entry

config.module.preLoaders = [{
  test: /\.js$/,
  loader: 'isparta!eslint',
  include: path.resolve('src')
}]

config.plugins = [
  ...config.plugins,
  new webpack.DefinePlugin({
    __DEBUG__: true,
    __MAPS_KEY__: JSON.stringify('testkey')
  })
]

config.vue.loaders.js = 'babel!isparta!eslint'

module.exports = config
