const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const fontmin = require('gulp-fontmin');
const GulpSSH = require('gulp-ssh');
const fs = require('fs');
const clientDir = './';


function compressImages() {

    gulp.src(clientDir + 'images/*')
        .pipe(imagemin())
        .pipe(gulp.dest(clientDir + 'images/dist'))
}

function compressFonts() {

    gulp.src(clientDir + 'fonts/*')
        .pipe(fontmin({
            text: ''
        }))
        .pipe(gulp.dest(clientDir + 'fonts/dist'));
}

gulp.task('compress' ,function () {

    compressImages();
    compressFonts();
});

gulp.task('deploy', () => {

    var gulpSSH = new GulpSSH({
        sshConfig: {
            host: 'yaxiong.me',
            port: 22,
            username: 'root',
            privateKey: fs.readFileSync('/Users/Hugh/.ssh/id_rsa')
        }
    });

    return gulpSSH.shell([
        'cd /home/projects/',
        'git pull origin master',
        'pm2 startOrRestart pm2.json'
    ]).on('ssh2Data', (data) => {
        process.stdout.write(data.toString());
    });
});


gulp.task('default', function () {

    browserSync.init({
        startPath: clientDir + 'index.html',
        server: {
            baseDir: './'
        }
    });
});




