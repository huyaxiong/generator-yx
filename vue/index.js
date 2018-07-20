var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = ["axios@latest",
    "fastclick@latest",
    "vue@latest",
    "vue-router@latest",
    "vuex@latest"];
var npmDevDeps = ["vue-loader@latest",
    "vue-template-compiler@latest"];


module.exports = Base.extend({

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
        console.log('done.')
    }
});