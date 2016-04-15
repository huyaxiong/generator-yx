const gulp = require('gulp');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const ngAnnotate = require('gulp-ng-annotate');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const postcssScss = require('postcss-scss');
const browserSync = require('browser-sync').create();


function makeCss() {

    var scssSrc = 'scss/shoefie.scss',
        cssDest = 'stylesheet/';

    gulp.src(scssSrc)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 10 versions']}),
            pxtorem({
                rootValue: 75,
                mediaQuery: true,
                propWhiteList: []
            })], {syntax: postcssScss}))
        .pipe(sourcemaps.write('../maps/', {
            includeContent: false,
            sourceRoot: '../scss/'
        }))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.reload({stream: true}));
}

function makeJs() {

    var jsSrc = ['js/app.js', 'js/ctrl/*.ctrl.js', 'js/svc/*.svc.js', 'js/drt/*.drt.js'],
        jsDest = 'script/';

    gulp.src(jsSrc)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write('../maps/'))
        .pipe(gulp.dest(jsDest))
        .pipe(browserSync.reload({stream: true}));
}

function makeHtml(filePath) {

    var src = filePath || ['js/partials/*.html', 'js/drt/*.html'],
        dest = 'html/partials/';

    gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('server', function () {

    browserSync.init({
        startPath: 'html/shoefie.html',
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['js/**/*', 'scss/*', 'html/*'], function (event) {
        var filePath = event.path;
        if (filePath.lastIndexOf('.scss') !== -1) {
            makeCss();
        } else if (filePath.lastIndexOf('.js') !== -1) {
            makeJs();
        } else if (filePath.lastIndexOf('js') !== -1 && filePath.lastIndexOf('.html') !== -1) {
            makeHtml(filePath);
        } else {
            browserSync.reload();
        }
    });
});

gulp.task('build', function () {

    makeCss();
    makeJs();
    makeHtml();
});
