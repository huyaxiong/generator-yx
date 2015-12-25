var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();


function makeCss(fileName) {

    var scssSrc = 'scss/' + (fileName || ''),
        cssDest = 'stylesheets/';
    sass(scssSrc, {
        sourcemap: true,
        compass: true,
        require: 'susy',
        style: 'compressed'})
        .on('error', sass.logError)
        .pipe(sourcemaps.write('../maps/', {
            includeContent: false,
            sourceRoot: '../scss/'}))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('server', function() {

    browserSync.init({
        startPath: 'htmls/test.html',
        server: {
            baseDir: './'
        }
    });

    gulp.watch('**/*', function (event) {

        var filePath = event.path;
        var fileName = filePath.slice(filePath.lastIndexOf('/') + 1);
        if (filePath.lastIndexOf('.scss') !== -1) {
            makeCss(fileName);
        } else {
            browserSync.reload();
        }
    });
});
