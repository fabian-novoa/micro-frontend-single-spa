const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={

    entry: './src/app.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module:{
        rules:[
            {
            test: /\.jsx?$/,
            exclude:/node_modules/,
            use:{
                loader: 'babel-loader'
                }
            },
            {
                test: /.css$/,
                use:['style-loader', 'css-loader']
                }
        ]
    },
    plugins: [],
    devServer:{
        historyApiFallback: true,
        port : 9002
    }
}