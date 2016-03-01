const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const postcss      = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssScss = require('postcss-scss');
const browserSync = require('browser-sync').create();


function makeCss(fileName) {

    var scssSrc = 'scss/' + (fileName || ''),
        cssDest = 'stylesheets/';

    gulp.src(scssSrc)
        .pipe(sourcemaps.init())
        .pipe(postcss([autoprefixer({browsers: ['last 2 versions']})], {syntax: postcssScss}))
        .pipe(sass({
            includePaths: ['bower_components/foundation-sites/scss', 'bower_components/susy/sass'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('../maps/', {
            includeContent: false,
            sourceRoot: '../scss/'
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.reload({stream: true}));
}

function makeJs(fileName) {

    var jsSrc = 'js/' + (fileName || ''),
        jsDest = 'scripts/';

    gulp.src(jsSrc)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write('../maps/'))
        .pipe(gulp.dest(jsDest))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('server', function () {

    browserSync.init({
        startPath: 'htmls/test.html',
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['js/*', 'scss/*', '!scss/_settings.scss', 'htmls/*'], function (event) {
        var filePath = event.path;
        var fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
        if (filePath.lastIndexOf('.scss') !== -1) {
            makeCss(fileName);
        } else if (filePath.lastIndexOf('.js') !== -1) {
            makeJs(fileName);
        } else {
            browserSync.reload();
        }
    });
});


