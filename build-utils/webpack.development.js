const webpack = require('webpack');
const path = require('path');

module.exports = () => ({
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, '../public'),
		publicPath: '/dist'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [new webpack.ProgressPlugin()]
});
