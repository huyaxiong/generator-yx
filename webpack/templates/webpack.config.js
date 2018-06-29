const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {

    entry: {
        app: path.resolve(__dirname, 'src', 'app.js')
    },
    output: {
        publicPath: '/dist/',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
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
                    limit: '20'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", "css-loader", 'postcss-loader', 'resolve-url-loader', 'sass-loader?sourceMap'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap'
                    }
                }
            },
            // {
            //     test: require.resolve('zepto'),
            //     loader: 'exports-loader?window.Zepto!script-loader'
            // }
        ]
    },
    resolve: {
        alias: {
            'jquery': 'jquery/dist/jquery.min.js',
            'vue': 'vue/dist/vue.esm.js',
            'vue-router': 'vue-router/dist/vue-router.esm.js',
            'vuex': 'vuex/dist/vuex.esm.js',
            'axios': 'axios/dist/axios.min.js',
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        // new webpack.ProvidePlugin({
        //     $: 'zepto/dist/zepto.js/zepto.min.js'
        // })
    ],
    // devServer: {
    //     host: "192.168.0.109"
    // }
};

if (process.env.NODE_ENV === 'dev') {

    module.exports.mode = 'development';
    module.exports.devtool = 'cheap-module-eval-source-map',
        module.exports.plugins = (module.exports.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    'BASE_URL': JSON.stringify('https://yaxiong.me/')
                }
            }),
            // new BundleAnalyzerPlugin()
        ])
}

if (process.env.NODE_ENV === 'prod') {

    module.exports.mode = 'production';
    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                'BASE_URL': JSON.stringify('https://yaxiong.me/')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            // mangle: false,
            comments: false,
            compress: {
                warnings: false,
                pure_funcs: ['console.log', 'console.warn', 'window.console.log.apply']
            }
        }),
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