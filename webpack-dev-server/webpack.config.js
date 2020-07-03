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
                test: /\.css$/,
                use: [
                    'style-loader', // inyecta código css desde js al navegador
                    'css-loader', // entiende que css puede existir en mi código js
                ]
            }
        ]
    },
    plugins: [ // Aquí levantamos la configuración del plugin
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Webpack-dev-server'
        }),
    ]
}