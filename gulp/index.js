var Generator = require('yeoman-generator');
var path = require('path');
var npmDevDeps = [
    'gulp@3.8.11',
    'gulp-fontmin@0.7.4',
    'gulp-imagemin@3.0.2',
    'gulp-ssh@0.6.0',
    'browser-sync@2.8.2'];


module.exports = class extends Generator {

    writing() {

        var cb = this.async();
        this.fs.copy(path.join(__dirname, 'templates'), '.');
        cb();
    }

    install() {

        this.yarnInstall(npmDevDeps, {'saveDev': true});
    }
};