const PATH = require('path');

const webpack = require("webpack");
const argv = require('yargs').argv;

const PREFIX = '../../../';

const SRC_FOLDER = PATH.resolve(__dirname, PREFIX, 'src/');
const SRC_SDK_FILE = PATH.resolve(__dirname, PREFIX, 'src/func-utils.js');
const TARGET_FOLDER = PATH.resolve(__dirname, PREFIX, 'dist/');
const TARGET_PUBLIC_PATH = '/dist/';
const TARGET_FILE = 'func-utils.js';

const uglify = !!argv.uglify;
const sourcemap = !!argv.sourcemap;

var webpackConfig = {
    entry: {
        app: SRC_SDK_FILE,
    },
    output: {
        path: TARGET_FOLDER,
        publicPath: TARGET_PUBLIC_PATH,
        filename: TARGET_FILE,
        libraryTarget: "var",
        library: "F"
    },
    devtool: 'inline-source-map',
    debug: true,    
    bail: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    SRC_FOLDER
                ],
                loader: 'babel',
                query: {
                    compact: false,
                    cacheDirectory: true
                }
            }
        ]        
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};

if(uglify) {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        sourceMap: sourcemap,
        output: {
            comments: false
        },
        compress: {
            warnings: false
        }
    }));
}

module.exports = webpackConfig;