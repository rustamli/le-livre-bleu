
var env = process.argv.indexOf('--dev') > -1 ? 'dev' : 'production';

var webpack = require('webpack'),
    path = require('path');

var config = {
    context: __dirname,
    entry: './index',
    output: {
        path: __dirname,
        filename: 'llb.build.js'
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [],

    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
        alias: {
            'graphs': path.join(__dirname, '/graphs'),
        }
    }
};

if (env === 'production') {
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, warnings: false}));
} else {
    config.devtool = 'source-map';
}

module.exports = config;

