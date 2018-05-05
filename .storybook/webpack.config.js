const webpack = require('webpack');
const path = require('path');
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
    // Enable sourcemaps to debug webpack's output.
    devtool: "eval",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"]
    },
    
    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 	
            	test: /\.tsx?$/, 
            	loaders: [
            	    {
            	        loader: 'ts-loader',
            	        options: {
            	        	// set `transpileOnly` to true to disable type checking
            	        	transpileOnly: false,
            	        	getCustomTransformers: () => ({
            	        	  before: [ tsImportPluginFactory({ libraryName: "antd", style: "css" }) ]
            	        	}),
            	        	compilerOptions: {
            	        	  module: 'es2015'
            	        	},
            	        }
            	    },
            	]
            },

            // Load css files
            {
                test: /\.css$/,
                loaders: [ 'style-loader', 'css-loader?sourceMap' ],
                include: path.resolve(__dirname, '../'),
            },

            // Load less files
            {
                test: /\.less$/,
                loaders: [ 'style-loader', 'css-loader?sourceMap', 'less-loader?sourceMap' ],
                include: path.resolve(__dirname, '../'),
            },

            // Load assets files
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                include: path.resolve(__dirname, '../'),
        		loader: 'url-loader',
                options: {
                    limit: 10000,
                },
            },
            {
				test: /\.mp3$/,
				loader: 'file-loader',
			},
        ]
    }
};