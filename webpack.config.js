var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //multiple entry - for future use
    /*entry: {
        appTest: './react/client.js',
        newApp: './react/client2.js'
    },*/
    entry: {
        main: './react/client.js'
    },
    output: {
        filename: '[name].js',
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
        // Uglify on prod. Need to add.
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.DefinePlugin({
            'process.env': {
                BROWSER: JSON.stringify(false)
            }
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};