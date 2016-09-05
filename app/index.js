var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = [];
var npmDevDeps = ['gulp@3.8.11',
    'gulp-babel@6.1.2', 'babel-preset-es2015@6.6.0',
    'gulp-concat@2.5.2', 'gulp-sourcemaps@1.5.0',
    'gulp-uglify@1.1.0', 'gulp-postcss@6.1.0',
    'autoprefixer@6.3.3', 'postcss-scss@0.1.6', 'postcss-pxtorem@3.3.1',
    'gulp-sass@2.2.0', 'gulp-imagemin@3.0.2', 'browser-sync@2.8.2', 'mocha@2.5.3'];


module.exports = Base.extend({

    initNpmConfig: function () {

        var config = {
            "name": this.appname,
            "version": "1.0.0",
            "description": "",
            "main": "server/main.js",
            "scripts": {
                "start": "NODE_PATH=./server node server/main.js",
                "test": ""
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
        this.argument('p', {type: String, required: false});
    },

    prompting: function () {
        
        var frontendDeps = ["core-js@2.4.1", 'jquery@2.2.3', 'foundation-sites@6.2.3', 'susy@2.2.12', 'angular@1.4.9',
            'ui-route@0.2.18', 'angular-resource@1.4.9', 'angular-animate@1.4.9',
            'gsap@1.18.2', 'hammer.js@2.0.6', 'pixi.js@3.0.11'];
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
        var p = this.p;
        if (p && !('c' === p || 'f' === p)) {
            return;
        } else if (!p || 'f' === p) {
            this.fs.copy(path.join(__dirname, 'templates'), '.');
            this.spawnCommandSync('mkdir', ['log', 'client', 'client/js']);
        } else if ('c' === p) {
            this.fs.copy(path.join(__dirname, 'templates', 'client'), '.');
            this.spawnCommandSync('mkdir', ['js']);
        }
        this.spawnCommandSync('touch', ['README.md', '.gitignore']);
        this.initNpmConfig();
        cb();
    },

    install: function () {

        var p = this.p;

        if (p && !('c' === p || 'f' === p)) {
            return;
        } else if (!p || 'f' === p) {
            var backendDeps = ['express@4.13.3', 'body-parser@1.14.2', 'compression@1.6.1', 'request@2.69.0',
                'mongoose@4.4.4', 'node-uuid@1.4.7', 'moment@2.12.0', 'multer@1.1.0', 'morgan@1.7.0',
                'serve-favicon@2.3.0', "ip@1.1.3"];
            npmDeps = npmDeps.concat(backendDeps);
        }
        this.npmInstall(npmDeps, {'save': true});
        this.npmInstall(npmDevDeps, {'saveDev': true});
    },

    done: function () {
        console.log('done.')
    }
});