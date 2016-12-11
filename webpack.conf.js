var path = require('path');
var webpack = require('webpack');
var version = require('./package.json').version;

var babelReactLoader = path.resolve(__dirname, 'node_modules/babel-loader') +
    '?' + ['babel-preset-es2015', 'babel-preset-stage-0'].map(function(s) {
        // Miserable fix from https://github.com/babel/babel-loader/issues/166#issuecomment-160866946
        return 'presets[]=' + require.resolve(s);
    }).join(',');

module.exports = {
    bail: false,
    entry: [
        './src/js\/index.js'
    ],
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    },
    resolve: {
        root: [
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, 'node_modules')
        ],
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.css', '.html']
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: [
                    babelReactLoader
                ],
                exclude: /node_modules/
            }, {
                // HTML LOADER
                // Reference: https://github.com/webpack/raw-loader
                // Allow loading html through js
                test: /\.html$/,
                loader: 'raw',
                exclude: /node_modules/
            },
            {
                test:   /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            }
        ]
    },
    postcss: function () {
        return [require('postcss-cssnext')];
    },
    debug: true,
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'assets',
        filename: 'main.js'
    }
};
