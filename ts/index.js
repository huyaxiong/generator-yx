var generators = require('yeoman-generator');
var path = require('path');
var npmDeps = ['systemjs@0.19.27'];
var npmDevDeps = ['typescript@2.0.2', 'typings@1.0.4', "rollup@0.36.0",
    "rollup-plugin-commonjs@5.0.4", "rollup-plugin-node-resolve@2.0.0", "rollup-plugin-uglify@1.0.1"];


module.exports = generators.Base.extend({

    writing: function () {

        this.fs.copy(path.join(__dirname, 'templates'), '.');
    },

    install: function () {
        this.npmInstall(npmDeps, {'save': true});
        this.npmInstall(npmDevDeps, {'saveDev': true});
    },

    done: function () {
        console.log('done.')
    }
});