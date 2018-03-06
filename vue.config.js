// 

const path = require('path')
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')



module.exports = {

	dll: true,
	outputDir: 'dist/client',

	css: {
		extract: true,
		sourceMap: true,
		// loaderOptions: {},
		// modules: true,
	},

	configureWebpack: function(config) {
		config.watch = true
		// config.profile = true
		// config.stats = 'minimal'
		// config.stats = 'errors-only'
		config.stats = { warnings: false, modules: false, performance: false }
		// config.stats = false
		// config.stats = true
		config.devtool = 'source-map'
		delete config.node.process

		config.output.filename = '[name].bundle.js'
		config.output.chunkFilename = '[name].chunk.js'

		config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors', minChunks: module => module.context && module.context.includes('node_modules'),
		}))
		config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest', minChunks: Infinity,
		}))
		// config.plugins.push(new webpack.optimize.AggressiveSplittingPlugin({
		// 	minSize: 30000, maxSize: 50000,
		// }))

		// config.plugins.push(new webpack.IgnorePlugin(/electron/))
		// config.plugins.push(new webpack.IgnorePlugin(/typescript/))
		// config.plugins.push(new webpack.IgnorePlugin(/server/))
		config.plugins.push(new webpack.IgnorePlugin(/dist/))
		config.plugins.push(new webpack.WatchIgnorePlugin([/node_modules/, /dist/]))
		config.plugins.push(new LiveReloadPlugin({ appendScriptTag: true }))
		// config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 9999, openAnalyzer: false }))
	},

	chainWebpack: function(config) {
		// console.log('config.plugins.store', config.plugins.store)
		config.plugins.delete('hmr')
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap(function(args) {
			args[0].clearConsole = false
			return args
		})
	},

}


