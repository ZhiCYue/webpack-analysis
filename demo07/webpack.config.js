'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: `./src/index.js`
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name]_[chunkhash:8].js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: [
					'babel-loader',
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackExternalsPlugin({
			externals: [
				{
					module: 'react',
					entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
					global: 'React',
				},
				{
					module: 'react-dom',
					entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
					global: 'ReactDOM',
				},
			]
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, `index.html`),
			filename: `index.html`,
			inject: true,
			// minify: {
			// 	html5: true,
			// 	collapseWhitespace: true,
			// 	preserveLineBreaks: false,
			// 	minifyCSS: true,
			// 	minifyJS: true,
			// 	removeComments: false
			// }
		})
	]
};
