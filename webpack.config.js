const path = require('path');
const webpackMerge = require('webpack-merge');

const moduleType = env => require(`./build-utils/webpack.${env}`)();

module.exports = env => {
	return webpackMerge(
		{
			entry: ['@babel/polyfill', './src/index.js'],
			output: {
				filename: 'bundle.js',
				path: path.join(__dirname, 'public/dist')
			},
			module: {
				rules: [
					{
						test: /\.js$/,
						loader: 'babel-loader',
						exclude: /node_modules/
					},
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader']
					},
					{
						test: /\.(jpe?g)|(png)$/,
						loader: 'url-loader'
					}
				]
			}
		},
		moduleType(env)
	);
};
