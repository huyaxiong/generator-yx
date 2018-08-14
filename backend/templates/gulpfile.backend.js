const gulp = require('gulp');
const babel = require('gulp-babel');


function makeBackendJS(filePath) {

    let src = !!filePath ? filePath : 'backend/**/*.js';
    let dist = !!filePath ? filePath.slice(0, filePath.lastIndexOf('/') + 1).replace('backend', 'server') : 'server/';

    gulp.src(src)
        .pipe(babel())
        .pipe(gulp.dest(dist));
}

function makeBackendJSON(filePath) {

    let src = !!filePath ? filePath : 'backend/**/*.json';
    let dist = !!filePath ? filePath.slice(0, filePath.lastIndexOf('/') + 1).replace('backend', 'server') : 'server/';

    gulp.src(src)
        .pipe(gulp.dest(dist));
}

gulp.task('backend', function () {

    makeBackendJS();
    makeBackendJSON();
});

gulp.task('default', function () {

    gulp.watch(['backend/**/*.js', 'backend/**/*.json'], function (event) {

        let filePath = event.path;
        if (event.path.lastIndexOf('.json') !== -1) {
            makeBackendJSON(filePath);
        } else if (event.path.lastIndexOf('.js') !== -1) {
            makeBackendJS(filePath);
        }
    });
});

