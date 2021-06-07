const path = require('path');
const webpack = require('webpack');

const vendors = [
  'react',
  'react-dom'
]

module.exports = {
  mode: 'development',
  entry: {
    vendor: vendors
  },
  output: {
    path: path.join(__dirname, 'static/scripts'),
    filename: 'vendor.js',
    library: 'vendorLibrary',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'static/scripts', 'manifest.demo06.json'),
      name: 'vendorLibrary',
      format: true,
      context: __dirname,
    })
  ]
};