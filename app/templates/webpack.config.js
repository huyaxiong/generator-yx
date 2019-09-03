const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {

  entry: {
    app: path.resolve(__dirname, 'src', 'main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg|ttf|woff|woff2|eot|gif)$/,
        loader: 'url-loader',
        options: {
          limit: '20480'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js',
      'vue-router': 'vue-router/dist/vue-router.esm.js',
      'vuex': 'vuex/dist/vuex.esm.js',
      'axios': 'axios/dist/axios.min.js'
    }
  },
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'BASE_URL': JSON.stringify('')
      }
    })
  ],
  devServer: {
    host: '0.0.0.0',
    compress: true
  }
}

if (process.env.NODE_ENV === 'test') {
  module.exports.devtool = false
  module.exports.output.publicPath = './'
  module.exports.plugins = [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'BASE_URL': JSON.stringify('')
      }
    }),
    // new CopyWebpackPlugin([{
    //   from: path.join(__dirname, 'favicon.ico'),
    //   to: path.join(__dirname, 'dist', 'favicon.ico')
    // }])
  ]
  module.exports.optimization = {
    minimize: true,
    nodeEnv: 'test',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](axios|vue|fastclick)/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}

if (process.env.NODE_ENV === 'prod') {
  module.exports.devtool = false
  module.exports.output.publicPath = './'
  module.exports.mode = 'production'
  module.exports.plugins = [
    new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'BASE_URL': JSON.stringify('')
      }
    }),
    // new CopyWebpackPlugin([{
    //   from: path.join(__dirname, 'favicon.ico'),
    //   to: path.join(__dirname, 'dist', 'favicon.ico')
    // }])
  ]
  module.exports.optimization = {
    minimize: true,
    nodeEnv: 'production',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](axios|vue)/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}
