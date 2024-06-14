const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={

    entry: './src/app.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        libraryTarget: 'system',
    },
    module:{
        rules:[
            {
            test: /\.jsx?$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [],
    externals: ['single-spa', 'react','react-dom','app-mf-javascript'],
    devServer:{
        historyApiFallback: true,
        port : 9002,
        headers:{
            "Access-Control-Allow-Origin":"*",
        }
    }
}