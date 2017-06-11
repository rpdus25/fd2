const path = require('path');

module.exports = {
  entry: path.resolve('src/main.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js/,
      loader: 'eslint-loader',
      enforce: 'pre'
    },{
      test: /\.js$/,
      loader: 'babel-loader'
    }]
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};








