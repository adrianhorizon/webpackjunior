const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	//entry point archibo principal main.css de la carpeta dist
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
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