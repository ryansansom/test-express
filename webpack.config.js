var path = require('path');
var find = require('find');
var slash = require('slash');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entries = {};

find
    .fileSync(/index\.js$/, './react/pages')
    .forEach(file => {
        const name = slash(file).replace(/^react\/pages\/([^\/]+).*$/, '$1');
        entries[name] = [`./${file}`];
    });

module.exports = {
    entry: entries,
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'site/public/wp')
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
        new webpack.DefinePlugin({
            'process.env': {
                CLIENT_RENDER: true
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js'
        }),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        // Uglify on prod. Need to add.
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        })
    ]
};