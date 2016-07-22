const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const postcssScss = require('postcss-scss');
const browserSync = require('browser-sync').create();


function makeCss() {

    var scssSrc = 'client/scss/app.scss',
        cssDest = 'client/stylesheet/';

    gulp.src(scssSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths:['node_modules/foundation-sites/scss'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 10 versions']}),
            pxtorem({
                //rootValue: 75,
                mediaQuery: true,
                propWhiteList: []
            })], {syntax: postcssScss}))
        .pipe(sourcemaps.write('../map/', {
            includeContent: false,
            sourceRoot: '../scss/'
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('vendor', function () {

    gulp.src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.min.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.js',
            'node_modules/rxjs/bundles/Rx.min.js',
            'node_modules/jquery/dist/jquery.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(uglify({mangle:false}))
        .pipe(gulp.dest('client/script'));
});

gulp.task('css', function () {

    makeCss();
});

gulp.task('default', function () {

    browserSync.init({
        startPath: 'client/index.html',
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['client/script/*', 'client/scss/*', 'client/index.html'], function (event) {
        
        var filePath = event.path;
        if (filePath.lastIndexOf('.scss') !== -1) {
            makeCss();
        } else {
            browserSync.reload();
        }
    });
});

