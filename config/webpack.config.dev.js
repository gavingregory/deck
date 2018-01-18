const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}