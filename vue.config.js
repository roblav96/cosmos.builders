// 

const eyes = require('eyes')
eyes.defaults.maxLength = 131072
const webpack = require('webpack')
const LiveReloadPlugin = require('webpack-livereload-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const styles = new ExtractTextPlugin('style.css')



module.exports = {

	dll: true,
	outputDir: 'dist/client',
	
	vueLoader: {
		// extractCSS: styles,
		hotReload: false,
	},

	// css: {
	// 	extract: true,
	// 	sourceMap: true,
	// 	// loaderOptions: {},
	// 	// modules: true,
	// },

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

		// let templated = '[name]' // '[hash].[name].[id].[query]'
		// config.output.filename = templated + '.bundle.js'
		// config.output.chunkFilename = templated + '.chunk.js'
		config.output.filename = '[name].bundle.js'
		config.output.chunkFilename = 'chunk.[name].js'

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
		// config.plugins.push(new webpack.IgnorePlugin(/dist/))
		config.plugins.push(new webpack.WatchIgnorePlugin([/node_modules/, /dist/]))
		config.plugins.push(new LiveReloadPlugin({ appendScriptTag: true }))
		// config.plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 9999, openAnalyzer: false }))
		// config.plugins.push(styles)
		// config.plugins.push(new HtmlWebpackHarddiskPlugin())
	},

	chainWebpack: function(config) {
		// console.log('config.plugins.store', config.plugins.store)
		config.plugins.delete('hmr')
		config.plugins.delete('no-emit-on-errors')
		config.plugin('friendly-errors').tap(function(args) {
			args[0].clearConsole = false
			return args
		})
		// config.plugin('html').tap(function(args) {
		// 	// args[0].hash = true
		// 	args[0].alwaysWriteToDisk = true
		// 	eyes.inspect(args[0], 'args[0]')
		// 	return args
		// })
	},

}


