const path = require('path')

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		filename: 'scrollspy.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: [
					path.resolve(__dirname, 'node_modules'),
				],
				loader: "babel-loader"
			}
		]
	}
}