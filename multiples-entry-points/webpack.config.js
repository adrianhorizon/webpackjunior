const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	// las llaves son para tener multplies entry point para cargar los js 
	entry: {
		home: path.resolve(__dirname, 'src/js/index.js'),
		prices: path.resolve(__dirname, 'src/js/prices.js'),
		contact: path.resolve(__dirname, 'src/js/contact.js'),	
	}, 
	output: {
		path: path.resolve(__dirname, 'dist'),
		//bundle.js le asignamos un nombre dinamico y la ruta de save /src/js/[name].js
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			//Aqui van los loaders
			{
				//test: //que tipo de archivo quiero reconocer.,
				//use: //que loader se va encargar del archivo
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					//['style-loader','css-loader'],
					//fallback: 'style-loader',
					use: "css-loader"
				}),
			}
		] 
	},
	plugins: [
		//aqui van los plugins
		//siemrpe name va poner extension css en la carpeta dist
		new ExtractTextPlugin("css/[name].css"),	
	]
}