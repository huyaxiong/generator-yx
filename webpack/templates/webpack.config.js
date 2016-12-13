var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

    entry: {
        vendor: ['normalize'],
        app: ['./js/main.js', './scss/main.scss']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'app.js'
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
                options: {
                    "presets": [
                        "es2015"
                    ]
                },
                include: [
                    "./js"
                ]
            },
            {
                test: /\.css$/,
                use: [

                    "style-loader", "css-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|ttf)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
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
            'normalize': 'normalize.css/normalize.css'
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: Infinity
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
};

if (process.env.NODE_ENV === 'prod') {

    module.exports.devtool = false;
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            // mangle: false,
            compress: {
                pure_funcs: ['console.log', 'window.console.log.apply']
            }
        })
    ])
}
