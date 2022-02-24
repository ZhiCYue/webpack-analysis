const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index",
  devServer: {
    // 项目 A 端口为 3001，项目 B 端口为 3002
    port: 3002,
    contentBase: path.join(__dirname, "dist"),
  },
  output: {
    // 项目 A 端口为 3001，项目 B 端口为 3002
    publicPath: "http://localhost:3002/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
