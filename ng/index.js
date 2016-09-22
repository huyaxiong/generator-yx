var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = ['angular@1.4.9', 'ui-route@0.2.18', 'angular-resource@1.4.9', 'angular-animate@1.4.9'];
var npmDevDeps = ['gulp-ng-annotate@2.0.0'];


module.exports = Base.extend({

    constructor: function () {
    },

    prompting: function () {
    },

    writing: function () {

        this.fs.copy(path.join(__dirname, 'templates', 'gulpfile.js'), '.');
    },

    install: function () {

        this.npmInstall(npmDeps, {'save': true});
        this.npmInstall(npmDevDeps, {'saveDev': true});
    },

    done: function () {
        console.log('done.')
    }
});