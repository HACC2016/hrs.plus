const webpack = require('webpack')

module.exports = {
  context: process.cwd(),
  devtool: 'eval-source-map',
  entry: {
    app: './src/main.js'
  },
  eslint: {
    formatter: require('eslint-friendly-formatter')
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.svg$/,
        loaders: ['url?limit=10000&name=[name].[ext]?[hash]', 'svgo']
      }
    ]
  },
  output: {
    path: 'public/',
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': `${process.cwd()}/src`
    }
  },
  vue: {
    loaders: {
      js: 'babel', // 'babel!eslint'
    },
    autoprefixer: false,
    postcss: [
      require('postcss-font-magician')(),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
  }
}
