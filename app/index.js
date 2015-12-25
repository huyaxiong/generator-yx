var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({

    writing: function () {
        this.fs.copy(path.join(__dirname, 'templates'), '.')
    },

    install: function () {
        this.npmInstall(['gulp', 'bower', 'browser-sync'], {'saveDev': true});
    }
});