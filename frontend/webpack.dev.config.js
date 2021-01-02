const path = require("path");
const dist = path.resolve(__dirname, "dist");

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const webpack = require("webpack");

console.log(process.env.NODE_ENV)
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
    // new CopyPlugin({
    //   patterns: [
    //    { from: 'node_modules/@ionic/core/dist/ionic/svg', to: './svg' },
    //   ]
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./assets/icons/favicon.ico"
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
        // "apple-touch-icon": path.resolve('./assets/icons/apple-touch-icon.png'),
        'apple-mobile-web-app-title': 'AppTitle',
        'apple-mobile-web-app-status-bar-style': 'black'
      },
      theme_color: '#000000'
    }),
  ],
  output: {
    filename: "bundle.js",
    path: dist,
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 4200,
    historyApiFallback: {
      disableDotRule: true
    }
  }
};