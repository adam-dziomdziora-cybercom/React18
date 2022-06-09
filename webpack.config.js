const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  plugins: [new ESLintPlugin()],
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
