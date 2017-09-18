const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './app.jsx',

	output: {
    filename: './bundle.js',
  },

	watch: true,

	devServer: {
		inline: true
	},

	//Add sass-loader
	module: {
		loaders: [
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
			{
				test: /\.(css)$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			},
			{
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
		]
	},
	devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
}
