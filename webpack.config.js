const path = require('path')
const webpack = require('webpack')

// const plugin = require()
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// modul
module.exports = {
//    базовый путь
    context: path.resolve(__dirname, 'src'),
//    точка входа
    entry: {
//основной файл
        app:[
            './js/app.js',
            './sass/main.sass'
        ],
    },
//    путь для собранных файлов
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: "../"
    },
    //конфиг серва
    devServer: {
        contentBase: './app'
    },
    module: {
        rules: [
            //sass
            {
                test: /\sass$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: { sourceMap: true }
                        },
                        {
                            loader: 'sass-loader',
                            options: { sourceMap: true }
                        }
                    ],
                    fallback: 'style-loader',
                })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin(
            'src/sass/[name].css'
        ),
    ],
}