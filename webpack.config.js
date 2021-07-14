const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let mode = 'development';

if (process.env.NODE_ENV === 'production') {
    mode = 'production';
}

module.exports = {
    devtool: 'source-map',
    mode: mode,
    devServer:{
        hot: true,
        open:{
            app:['google-chrome-stable', '--incognito'],
        },
        static:[
            {
                directory: path.resolve(__dirname, './src'),
                serveIndex:true,
                watch: true,
            }
        ]
    },
    entry: './src/js/index.js',
    output:{
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename:'images/[hash][ext][query]'
    },
    module: {
        rules:[
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset'
            },
            {
                test:/\.s?css$/i,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                     'sass-loader'],
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'bundle.css'
        }),
        new CleanWebpackPlugin()
    ]
}
