const PATH = require('path');

const gulp = require('gulp');
const gutil = require('gulp-util');

const rimraf = require('rimraf');
const browserSync = require('browser-sync');
const argv = require('yargs').argv;
const webpack = require("webpack");

const DEFAULT_PORT = 6001;

const online = !!argv.online;
const port = argv.port || DEFAULT_PORT;

const SDK_FILE = 'dist/func-utils.js';
const EXAMPLE_FILES = 'docs/examples/**/*';
const SIMPLE_EXAMPLE_FILE = 'docs/examples/simple/index.html';
const TARGET_FOLDER = PATH.resolve(__dirname, 'dist/');

const webpackConfig = require('./tools/build/config/webpack-config.js');
const compiler = webpack(webpackConfig);

const printReport = function(stats) {
    gutil.log('[webpack]', stats.toString({
        modules: false,
        errorDetails: false,
        timings: false,
        cached: false,
        colors: true
    }));    
};

gulp.task('build', function(callback) {
    compiler.run(function(err, stats) {
        if(err) {
            gutil.log('error', new gutil.PluginError('[webpack]', err));
        } 

        printReport(stats);
        callback();
    });
});

gulp.task('build:watch', function(callback) {
    compiler.watch({            
        aggregateTimeout: 300
    }, function(err, stats) {
        if(err) {
            gutil.log('error', new gutil.PluginError('[webpack]', err));
        } 

        printReport(stats);
    });

    callback();        
});

gulp.task('clean', function (cb) {
    rimraf(TARGET_FOLDER, cb);
});

gulp.task('server', ['clean', 'build:watch'], function() {
    browserSync({
        port: port,
        browser: [],
        notify: online,
        online: online,
        logConnections: true,
        files: [
           SDK_FILE,
           EXAMPLE_FILES
        ],
        server: {
            baseDir: '.',
            index: SIMPLE_EXAMPLE_FILE
        }
    });
});

