const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: __dirname,
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, './dist')

  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      chunks: ['index'],
      template: 'public/index.html',
      filename: 'index.html'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    disableHostCheck: true,
    port: 1688,
    index: 'index.html',
    // writeToDisk: filepath => /index\.ejs/.test(filepath),
    open: true,
  }
}
