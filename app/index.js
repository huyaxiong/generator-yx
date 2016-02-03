var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');

module.exports = Base.extend({

    constructor: function () {

        Base.apply(this, arguments);
        this.argument('p', {type: String, required: false});
    },

    writing: function () {

        var p = this.p;
        if (p && !('c' === p || 'f' === p)) {
            return;
        } else if (!p || 'f' === p) {
            this.fs.copy(path.join(__dirname, 'templates'), '.');
            this.spawnCommandSync('mkdir', ['client', 'client/htmls', 'client/images', 'client/js', 'client/maps',
                'client/scripts', 'client/stylesheets']);
        } else if ('c' === p) {
            this.fs.copy(path.join(__dirname, 'templates', 'client'), '.');
            this.spawnCommandSync('mkdir', ['htmls', 'images', 'js', 'maps', 'scripts', 'stylesheets']);
        }
        this.spawnCommandSync('touch', ['README.md']);
    },

    install: function () {

        //this.spawnCommand('npm', ['install'], {'saveDev': true});
        var p = this.p;
        if (p && !('c' === p || 'f' === p)) {
            return;
        } else if (!p || 'f' === p) {
            this.npmInstall(['express@4.13.3', 'body-parser@1.14.2',
                'mongoose@3.8.30', 'socket.io@1.3.7',
                'tingodb@0.4.2', 'tungus@0.0.5',
                'browser-sync@2.8.2'], {'save': true}, function () {
            });

            this.npmInstall(['bower@1.7.1', 'gulp@3.8.11',
                'gulp-concat@2.5.2', 'gulp-sourcemaps@1.5.0',
                'gulp-uglify@1.1.0', 'gulp-ruby-sass@1.3.0',
                'browser-sync@2.8.2'], {'saveDev': true}, function () {
            });
        } else if ('c' === p) {
            this.npmInstall(['bower@1.7.1', 'gulp@3.8.11',
                'gulp-concat@2.5.2', 'gulp-sourcemaps@1.5.0',
                'gulp-uglify@1.1.0', 'gulp-ruby-sass@1.3.0',
                'browser-sync@2.8.2'], {'saveDev': true}, function () {
            });
            //this.bowerInstall(['foundation-sites#6.1.1',
            //    'EaselJS#0.8.2', 'PreloadJS#0.6.2', 'SoundJS#0.6.2', 'TweenJS#0.6.2',
            //    'lodash#3.10.1', 'moment#2.11.0', 'gsap#1.18.2', 'angular#1.3.15'
            //], {'save': true}, function () {
            //})
        }
    }
});