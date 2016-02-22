var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'site'),
    entry: './react/client.js',

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'site/public')
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['jsx-loader', 'babel-loader']
            }
        ],
        loaders: [
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader!less-loader')
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(false)
            }
        }),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};