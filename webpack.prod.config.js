var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var definePlugin = new webpack.DefinePlugin({
    __BARATONA_API_URL__: JSON.stringify('https://baratona-api.herokuapp.com'),
    __MAPS_API_KEY__ : JSON.stringify(process.env.MAPS_API_KEY || 'true')
});


var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            }
        ]
    },

    plugins: [definePlugin]
};

module.exports = config;
