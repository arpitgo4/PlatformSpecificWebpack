const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader'], include: path.join(__dirname, 'src') }
        ]
    },
    plugins: [
        new webpack.NormalModuleReplacementPlugin(
            /(.*)_PLATFORM(\.*)/,
            function(resource){
              resource.request = resource.request
                .replace(/_PLATFORM/, `_${process.env.PLATFORM}`);
            }
        )
    ]
};