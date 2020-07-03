const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        hot: true,
        open: true,
        port: 1234,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', // inyecta código css desde js al navegador
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        },
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader', // inyecta código css desde js al navegador
                    'css-loader', // entiende que css puede existir en mi código js
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // inyecta código css desde js al navegador
                    'css-loader', // entiende que css puede existir en mi código js
                    'sass-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader', // inyecta código css desde js al navegador
                    'css-loader', // entiende que css puede existir en mi código js
                    'stylus-loader'
                ]
            },
            {
                test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 90000,
                    }
                }
            }
        ]
    },
    plugins: [ // Aquí levantamos la configuración del plugin
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack-dev-server',
            template: path.resolve(__dirname, 'index.html')
        }),
    ]
}