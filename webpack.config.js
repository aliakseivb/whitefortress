const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: '.dist',
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        {from: "src/styles", to: "src/styles"},
        {from: "src/fonts", to: "src/fonts"},
        {from: "src/images", to: "src/images"},
        {from: "src/pages", to: "src/pages"},
        {from: "src/data/certificatesImages", to: "src/data/certificatesImages"},
        {from: "src/data/vendorsImages", to: "src/data/vendorsImages"},
        {from: "src/scripts", to: "src/scripts"},
      ],
    }),
  ]
};