const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
  performance: {
    maxEntrypointSize: 4000000,
    maxAssetSize: 2000000,
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('./index.html'),
      favicon: path.resolve('./favicon.png'),
    }),
  ],
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    port: 9000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(s|)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
