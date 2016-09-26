const babel = require('gulp-babel');


function makeBackend() {

    var backendSrc = 'backend/',
        backendDest = 'server/';

    gulp.src(backendSrc + '**/*.js')
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

    gulp.src(backendSrc + '**/*.json')
        .pipe(gulp.dest(backendDest));
}

gulp.task('backend', function () {

    gulp.watch(['backend/**/*'], function (event) {

        makeBackend();
    });
});