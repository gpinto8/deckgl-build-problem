const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devMode = true;
const BUILD_PATH = '/dist/test';

module.exports = {
  entry: './src/App.jsx',
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  output: {
    path: __dirname + BUILD_PATH,
    filename: 'micro-frontend.js',
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
};