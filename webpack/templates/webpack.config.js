var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var distDir = path.resolve(__dirname, 'src', 'customize', 'js');


module.exports = {

    entry: {
        app: 'main.js'
    },
    output: {
        publicPath: '/customize/js/',
        path: distDir,
        filename: '[name].js',
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
                test: /\.(ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
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
            'vue$': 'vue/dist/vue.common.js',
            'vue-router$': 'vue-router/dist/vue-router.common.js',
            // 'vuex$': 'vuex/dist/vuex.min.js',
            'jquery': 'jquery/dist/jquery.min.js',
            // 'date-fns$': 'date-fns/dist/axios.min.js',
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",
        //     minChunks: Infinity
        // }),
        // new HtmlWebpackPlugin({
        //     inject:'head',
        //     filename: 'points-gift.html',
        //     template: 'points-gift.html',
        //     chunks: ['vendor', 'points-gift']
        // }),
        // new webpack.ProvidePlugin({
        //     $: 'zepto/dist/zepto.js/zepto.min.js'
        // })
    ],
    // devServer: {
    //     host: "192.168.0.109"
    // }
};

if (process.env.NODE_ENV === 'test') {

    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        // new CleanWebpackPlugin([distDir]),
        new webpack.DefinePlugin({
            'process.env': {
                'BASE_URL': JSON.stringify('https://stage.coolfen.com/api/')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // mangle: false,
            comments: false,
            compress: {
                warnings: false,
                pure_funcs: ['console.log', 'console.warn', 'window.console.log.apply']
            }
        }),
    ])
}

if (process.env.NODE_ENV === 'prod') {

    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        // new CleanWebpackPlugin([distDir]),
        new webpack.DefinePlugin({
            'process.env': {
                'BASE_URL': JSON.stringify('https://api.coolfen.com/api/')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            // mangle: false,
            comments: false,
            compress: {
                warnings: false,
                pure_funcs: ['console.log', 'console.warn', 'window.console.log.apply']
            }
        }),
    ])
}