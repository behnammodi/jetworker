const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const cleanWebpackPlugin = new CleanWebpackPlugin();

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html",
  chunks: ["app"]
});

const isProduction = process.env.BUILD === "production";

module.exports = {
  entry: {
    app: "./src/index.js",
    worker: "./src/index.worker.js"
  },
  output: {
    //filename: "[name].[contenthash].js",
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  devtool: isProduction ? false : "source-map",
  plugins: [cleanWebpackPlugin, htmlWebpackPlugin]
};
