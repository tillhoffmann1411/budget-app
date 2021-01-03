const path = require("path");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require("webpack");

module.exports = {
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: { loader: 'ts-loader', options: { transpileOnly: true } },
      },
      {
        test: /.css$/, use: [
          { loader: "style-loader" },
          { loader: 'css-loader', options: { sourceMap: true, esModule: false } },
          { loader: 'sass-loader', options: { sourceMap: true } }
        ]
      }
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify('http://django:8000/'),
      'API_PATH': JSON.stringify(''),
      'API_SECURE': JSON.stringify('')
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "DayCash",
      filename: "index.html",
      template: "src/index.html",
      favicon: "./assets/icons/favicon.ico",
      alwaysWriteToDisk: true,
      minify: false
    }),
    new WebpackPwaManifest({
      name: 'DayCash',
      short_name: 'DayCash',
      description: 'DayCash. Your daily budget app.',
      background_color: '#000000',
      inject: true,
      ios: true,
      icons: [
        {
          src: path.resolve('./assets/icons/apple-touch-icon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('icons', 'ios'),
          ios: true
        },
        {
          src: path.resolve('./assets/icons/apple-touch-icon.png'),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          purpose: "any maskable",
          destination: path.join('icons', 'ios'),
          ios: 'startup'
        },
        {
          src: path.resolve('./assets/icons/android-chrome-144x144.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('icons', 'android')
        }
      ],
      ios: {
        'apple-touch-icon': path.resolve('./assets/icons/apple-touch-icon.png'),
        'apple-mobile-web-app-title': 'AppTitle',
        'apple-mobile-web-app-status-bar-style': 'black'
      },
      theme_color: '#000000'
    }),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    port: 4200,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};