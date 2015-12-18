var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        startPath: 'htmls/test.html',
        server: {
            baseDir: './'
        }
    });
    gulp.watch(['**/*']).on('change', browserSync.reload);
});
