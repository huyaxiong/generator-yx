var generators = require('yeoman-generator');
var path = require('path');
var npmDeps = ['systemjs@0.19.27'];
var npmDevDeps = ['typescript@1.8.9', 'typings@1.0.4'];


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