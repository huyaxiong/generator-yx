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
                "wf": "cross-env NODE_ENV=dev ./node_modules/.bin/webpack-dev-server -w --open-page './dist/index.html'",
                "bf": "cross-env NODE_ENV=prod ./node_modules/.bin/webpack --progress",
                "wb": "gulp --gulpfile gulpfile.backend.js",
                "bb": "gulp --gulpfile gulpfile.backend.js backend",
                "start": "node ./server/main.js --debug"
            },
            "author": "Hugh",
            "license": "ISC",
            "dependencies": {},
            "devDependencies": {},
            "babel": {
                "presets": ["es2015"]
            }
        };
        this.fs.writeJSON('package.json', config);
    },

    constructor: function () {

        Base.apply(this, arguments);
        // this.argument('p', {userType: String, required: false});
    },

    prompting: function () {

        var frontendDeps = ['normalize.css@^5.0.0', 'jquery@2.2.3', 'susy@2.2.12'];
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