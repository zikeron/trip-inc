const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const dotenv = require('dotenv');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

dotenv.config();

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/frontend/index.js',
  output: {
    path: isProd ? path.join(process.cwd(), './src/server/public') : '/',
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
    minimize: isProd,
    minimizer: isProd ? [new TerserPlugin()] : [],
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      /*{
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
          /dist/,
          /bundle/,
        ],
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
          },
        ],
      },*/
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              prependData: `
              @import "${ path.resolve(__dirname, 'src/frontend/assets/styles/Vars.scss') }";
              @import "${ path.resolve(__dirname, 'src/frontend/assets/styles/Media.scss') }";
              `,
            }
          },
        ],
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ],
      },
    }),
    new MiniCssExtractPlugin({
      filename: isProd ? 'assets/app-[hash].css' : 'assets/app.css',
    }),
  ],
};

