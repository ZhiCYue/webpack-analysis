const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index",
  devServer: {
    // 项目 A 端口为 3001，项目 B 端口为 3002
    port: 3002,
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
    new ModuleFederationPlugin({
      // 提供给其他服务加载的文件
      filename: "remoteEntry.js",
      // 唯一ID，用于标记当前服务
      name: "app2",
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        "./NewsList": "./src/NewsList",
      },
      // 引用 app1 的服务
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true }
      }
    })
  ],
  devtool: 'source-map'
};
