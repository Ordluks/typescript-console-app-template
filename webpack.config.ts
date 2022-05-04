import { resolve } from 'path'
import { Configuration } from 'webpack'
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
	plugins: [
		new ProgressBarPlugin() as any
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
