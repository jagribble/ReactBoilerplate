const webpack = require('webpack');
require('dotenv').config();

console.log(process.env);
module.exports = {
  mode: 'development',
  context: __dirname,
  entry: ['@babel/polyfill', `${__dirname}/components/index.js`],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env','@babel/preset-react']
      }
    }, {
      test: /\.scss$/,
      use: [
        'style-loader', // creates style nodes from JS strings
        'css-loader', // translates CSS into CommonJS
        'sass-loader', // compiles Sass to CSS, using Node Sass by default
      ],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        CONTENTFUL_SPACE: JSON.stringify(process.env.CONTENTFUL_SPACE),
        CONTENTFUL_TOKEN: JSON.stringify(process.env.CONTENTFUL_TOKEN),
        CONTENTFUL_PREVIEW: JSON.stringify(process.env.CONTENTFUL_PREVIEW),
        AUTH0_DOMAIN: JSON.stringify(process.env.AUTH0_DOMAIN),
        AUTH0_CLIENTID: JSON.stringify(process.env.AUTH0_CLIENTID),
        AUTH0_AUDIENCE: JSON.stringify(process.env.AUTH0_AUDIENCE),
      },
    })],
  output: {
    filename: 'build.js',
    path: `${__dirname}/public/js`,
  },
  externals: {
    fs: 'commonjs fs',
  },

};
