const WebpackNotifierPlugin = require('webpack-notifier');

const config = require('./webpack.config.common');
config.devtool= 'source-map';
config.mode = 'development';
config.plugins.push(new WebpackNotifierPlugin({ alwaysNotify: true }));


module.exports = config;
