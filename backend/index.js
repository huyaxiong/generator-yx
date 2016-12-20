var generators = require('yeoman-generator');
var path = require('path');
var npmDeps = ['express@4.13.3', 'body-parser@1.14.2', 'compression@1.6.1', 'request@2.69.0',
    'mongoose@4.4.4', 'node-uuid@1.4.7', 'moment@2.12.0', 'multer@1.1.0', 'morgan@1.7.0',
    'serve-favicon@2.3.0', 'ip@1.1.3'];
var npmDevDeps = ['babel-cli@6.14.0', 'babel-plugin-transform-runtime@6.15.0',
    'babel-preset-es2017@6.14.0', 'babel-preset-node6@11.0.0', 'babel-project-relative-import@2.0.1',
    'gulp-babel@6.1.2', 'mocha@2.5.3'];


module.exports = generators.Base.extend({

    writing: function () {

        var cb = this.async();
        this.fs.copy(path.join(__dirname, 'templates'), '.');
        cb();
    },

    install: function () {

        this.npmInstall(npmDeps, {'save': true});
        this.npmInstall(npmDevDeps, {'saveDev': true});
    },

    done: function () {

    }
});
