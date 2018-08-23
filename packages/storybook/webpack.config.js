const path = require('path')
const isDev = process.env.NODE_ENV === 'development'

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [['env', { modules: false }], 'stage-0', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.png$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  }
}
