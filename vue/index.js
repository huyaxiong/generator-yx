var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = ["axios@^0.15.3",
    "vue@^2.1.3",
    "vue-router@^2.1.0",
    "vuex@^2.0.0",
    "vuex-router-sync@^2.1.1"];
var npmDevDeps = ["vue-loader@^10.0.0"];


module.exports = Base.extend({

    initNpmConfig: function () {

    },

    constructor: function () {

    },

    prompting: function () {

    },

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