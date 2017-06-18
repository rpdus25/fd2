const path = require('path');

module.exports = {
  entry: path.resolve('src/index.jsx'),
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.hbs$/,
      loader: 'handlebars-loader'
    }, {
      test: /\.css$/,
      loader: 'css-loader'
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
