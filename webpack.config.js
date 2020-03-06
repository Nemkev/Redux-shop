const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './index.tsx'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader',
      // },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
      },
      {
        test: /\.(ttf|eot|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader',
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'react-svg-loader',
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'url-loader',
      // },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-url-loader',
      // },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     'babel-loader',
      //     {
      //       loader: 'react-svg-loader',
      //       options: {
      //         svgo: {
      //           plugins: [{ removeTitle: false }],
      //           floatPrecision: 2,
      //         },
      //       },
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
};
