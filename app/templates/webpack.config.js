const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {

    entry: {
        app: path.resolve(__dirname, 'src', 'main.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|ttf|woff|eot)$/,
                loader: 'url-loader',
                options: {
                    limit: '10240'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", 'postcss-loader', "sass-loader"
                ]
            }
        ]
    },
    resolve: {
        alias: {
            'axios': 'axios/dist/axios.min.js',
        }
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        // new BundleAnalyzerPlugin()
    ],
    devServer: {
        // host: "192.168.0.109"
    }
};

if (process.env.NODE_ENV === 'prod') {

    module.exports.devtool = false;
    module.exports.mode = 'production';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new webpack.HashedModuleIdsPlugin(),
    ]);
    module.exports.optimization = {
        minimize: true,
        // nodeEnv: 'production',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
}

