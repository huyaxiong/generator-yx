var generators = require('yeoman-generator');
var path = require('path');
var npmDevDeps = ['gulp@3.8.11', 'gulp-babel@6.1.2', 'gulp-uglify@1.1.0',
    'gulp-concat@2.5.2', 'gulp-sourcemaps@1.5.0',
    'gulp-postcss@6.1.0', 'gulp-sass@2.2.0', 'gulp-fontmin@0.7.4',
    'gulp-imagemin@3.0.2', 'babel-preset-es2015@6.6.0',
    'autoprefixer@6.3.3', 'postcss-scss@0.1.6', 'postcss-pxtorem@3.3.1',
    'browser-sync@2.8.2'];


module.exports = generators.Base.extend({

    writing: function () {

        var cb = this.async();
        this.fs.copy(path.join(__dirname, 'templates'), '.');
        cb();
    },

    install: function () {

        this.npmInstall(npmDevDeps, {'saveDev': true});
    },

    done: function () {
        console.log('done.')
    }
});