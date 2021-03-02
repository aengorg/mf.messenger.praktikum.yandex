const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'bundle.js': './source/index.ts',
    style: './source/styles/root.postcss',
  },
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: '[chunkhash]-[name]',
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.hbs$/,
        use: 'raw-loader',
      },
      {
        test: /\.postcss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: {
      handlebars: 'handlebars/dist/handlebars',
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors.js',
          chunks: 'all',
        },
      },
    },
  },
  devServer: {
    compress: true,
    port: 9000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      favicon: 'public/favicon.ico',
    }),
  ],
};
