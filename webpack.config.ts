import { resolve } from 'path'
import { BannerPlugin, Configuration, WebpackPluginInstance } from 'webpack'
import merge from 'webpack-merge'
import ProgressBarPlugin from 'progress-bar-webpack-plugin'

const commonConfig: Configuration = {
	entry: './src/index.ts',
	output: {
		path: resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader'
			}
		]
	},
	devtool: 'source-map',
	target: 'node',
	resolve: {
		extensions: ['.ts', '.js']
	},
	plugins: [
		new ProgressBarPlugin() as WebpackPluginInstance,
		new BannerPlugin({
			banner: '#!/usr/bin/env node',
			raw: true
		})
	]
}

const devConfig = merge(commonConfig, {
	mode: 'development'
})

const prodConfig = merge(commonConfig, {
	mode: 'production'
})

const config = {
	development: devConfig,
	production: prodConfig
}
[process.env.NODE_ENV || 'development']

export default config
