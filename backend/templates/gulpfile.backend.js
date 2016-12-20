const gulp = require('gulp');
const babel = require('gulp-babel');


function makeBackendJS(filePath, fileName) {

    var backendSrc = fileName ? 'backend/' + filePath + fileName : 'backend/**/*.js',
        backendDest = fileName ? 'server/' + filePath : 'server/';

    gulp.src(backendSrc)
        .pipe(babel({
            "presets": [
                "es2017",
                "node6"
            ],
            "plugins": [
                "transform-runtime",
                [
                    "babel-project-relative-import",
                    {
                        "sourceDir": "server"
                    }
                ]
            ]
        }))
        .pipe(gulp.dest(backendDest));
}

function makeBackendJSON() {

    gulp.src('backend/**/*.json')
        .pipe(gulp.dest('server/'));
}

gulp.task('backend', function () {

    makeBackendJS();
    makeBackendJSON();
});

gulp.task('default', function () {

    gulp.watch(['backend/**/*.js', 'backend/**/*.json'], function (event) {

        var filePath = event.path;
        if (event.path.indexOf('backend') !== -1 && event.path.lastIndexOf('.json') !== -1) {
            makeBackendJSON()
        } else if (event.path.indexOf('backend') !== -1 && event.path.lastIndexOf('.js') !== -1) {
            let filePath = event.path.slice(event.path.lastIndexOf('backend/') + 'backend/'.length, event.path.lastIndexOf('/') + 1);
            let fileName = event.path.slice(event.path.lastIndexOf('/') + 1);
            makeBackendJS(filePath, fileName);
        }
    });
});

