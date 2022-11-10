const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map none',
  devServer: {
    host:   'localhost',
    // host: '192.168.1.64',
    port: 8080,
    historyApiFallback: true,  //only work in dev server for build check this source: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually
    disableHostCheck: true,

},

  output: {

    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",

  },
  module: {
    rules: [

      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "imgs"
        }
      }

    },


    ]
  },
  plugins: [new MiniCssExtractPlugin({

    filename: '[name].css',
    chunkFilename: '[id].css',
  }),

  new Dotenv({
    path: '.env',
    systemvars: true// load this now instead of the ones in '.env'

  }),

],



});