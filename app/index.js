var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = [];


module.exports = Base.extend({

    initNpmConfig: function () {

        var config = {
            "name": this.appname,
            "version": "1.0.0",
            "description": "",
            "main": "server/main.js",
            "scripts": {
                "start": "node ./server/main.js --debug",
            },
            "author": "",
            "license": "ISC",
            "dependencies": {},
            "devDependencies": {}
        };
        this.fs.writeJSON('package.json', config);
    },

    constructor: function () {

        Base.apply(this, arguments);
        // this.argument('p', {type: String, required: false});
    },

    prompting: function () {

        var frontendDeps = ['jquery@2.2.3', 'normalize.css@^5.0.0', 'susy@2.2.12', 'foundation-sites@6.2.3', "core-js@2.4.1"];
        var cb = this.async();

        this.prompt({
            type: "checkbox",
            name: 'frontendDeps',
            message: 'What do you want?',
            choices: frontendDeps,
            default: []
        }, function (a) {
            npmDeps = npmDeps.concat(a.frontendDeps);
            cb();
        }.bind(this));
    },

    writing: function () {

        var cb = this.async();
        // var p = this.p;
        this.fs.copy(path.join(__dirname, 'templates'), '.');
        this.spawnCommandSync('mkdir', ['logs', 'dist']);
        this.initNpmConfig();
        cb();
    },

    install: function () {

        this.npmInstall(npmDeps, {'save': true});
    },

    done: function () {
        console.log('done.')
    }
});