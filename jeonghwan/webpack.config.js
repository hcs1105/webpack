const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode : 'development',
	entry : {
		main : './src/app.js',
	},
	output : {
		path : path.resolve('./dist'),
		filename : '[name].js',
	},
	module : {
		rules : [
			{
				test : /\.(css|scss)$/,
				use : ['style-loader','css-loader'],
			},
			{
				test : /\.(png|jpe?g|gif|svg)$/,
				use : [{
					loader : 'file-loader',
					options : {
						//publicPath : './dist',
						name : '[name].[ext]?[hash]',
					}
				}],
			},
		],
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : './index.html'
		}),
		new CleanWebpackPlugin(),
	],
};