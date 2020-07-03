const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js'),
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    //'style-loader', // inyecta código css desde js al navegador
                    'css-loader', // entiende que css puede existir en mi código js
                ]
            }
        ]
    },
    plugins: [ // Aquí levantamos la configuración del plugin
        new HtmlWebpackPlugin({
            title: 'Plugins'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
}