var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    browserSync = require('browser-sync').create();


function makeCss(fileName) {

    var scssSrc = 'scss/' + (fileName || ''),
        cssDest = 'stylesheets/';

    sass(scssSrc, {
        sourcemap: true,
        compass: true,
        require: 'susy',
        style: 'compressed'
    }).on('error', sass.logError)
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

    gulp.watch(['js/*', 'scss/*', 'htmls/*'], function (event) {
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


