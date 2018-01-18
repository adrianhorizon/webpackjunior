const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	//para cambiar el server al que quieres que apunte
	devServer: {
		port: 9000,
	},
	module: {
		rules: [
			//Aqui van los loaders
			{
				//test: //que tipo de archivo quiero reconocer.,
				//use: //que loader se va encargar del archivo
				test: /\.css$/,
				use: ['style-loader','css-loader'],
			}
		] 
	}
}