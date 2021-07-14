const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    mode: mode,
    devServer:{
        hot: true,
        open:{
            app:['google-chrome-stable', '--incognito'],
        },
        contentBase: './dist',
    },
    entry: './src/js/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        })
    ]
}
