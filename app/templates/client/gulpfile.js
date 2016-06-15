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

    var scssSrc = 'client/scss/app.scss',
        cssDest = 'client/stylesheet/';

    gulp.src(scssSrc)
    // .pipe(sourcemaps.init())
        .pipe(sass({
            // includePaths: ['node_modules/materialize-css/sass', 'node_modules/susy/sass'],
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(postcss([autoprefixer({browsers: ['last 10 versions']})
            // pxtorem({
            //     rootValue: 16,
            //     mediaQuery: true,
            //     propWhiteList: []
            // })
        ], {syntax: postcssScss}))
        // .pipe(sourcemaps.write('../map/', {
        //     includeContent: false,
        //     sourceRoot: '../scss/'
        // }))
        .pipe(gulp.dest(cssDest))
        .pipe(browserSync.reload({stream: true}));
}

function makeJs() {

    var jsSrc = ['client/js/app.js', 'client/js/ctrl/*.ctrl.js', 'client/js/rsc/*.rsc.js', 'client/js/svc/*.svc.js', 'client/js/fty/*.fty.js', 'client/js/drt/*.drt.js'],
        jsDest = 'client/script/';

    gulp.src(jsSrc)
    // .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(ngAnnotate())
        .pipe(uglify())
        // .pipe(sourcemaps.write('../map/'))
        .pipe(gulp.dest(jsDest))
        .pipe(browserSync.reload({stream: true}));
}

function makeTemplate(filePath) {

    var src = filePath || ['client/js/drt/*.html'],
        dest = 'client/template/';

    gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe(browserSync.reload({stream: true}));
}

gulp.task('default', function () {

    browserSync.init({
        startPath: 'client/index.html',
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['client/js/**/*', 'client/scss/*', 'client/index.html'], function (event) {

        var filePath = event.path;
        if (filePath.lastIndexOf('.scss') !== -1) {
            makeCss();
        } else if (filePath.lastIndexOf('.js') !== -1) {
            makeJs();
        } else if (filePath.lastIndexOf('.drt.html') !== -1) {
            makeTemplate(filePath);
        } else {
            browserSync.reload();
        }
    });
});

gulp.task('build', function () {

    makeCss();
    makeJs();
    makeTemplate();
});
