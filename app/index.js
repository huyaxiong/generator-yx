var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var bowerDependencies;


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

    initBowerConfig: function () {

        var config = {
            "name": this.appname,
            "description": "",
            "main": "",
            "authors": "",
            "license": "ISC",
            "moduleType": [],
            "homepage": "",
            "ignore": [
                "**/.*",
                "node_modules",
                "bower_components",
                "test",
                "tests"
            ],
            "dependencies": {}
        };
        this.fs.writeJSON('bower.json', config);
    },

    constructor: function () {

        Base.apply(this, arguments);
        this.argument('p', {type: String, required: false});
    },

    prompting: function () {
        
        var bowerDeps = ['jquery#2.2.3', 'susy#2.2.12', 'foundation-sites#6.2.1', 'angular#1.4.9',
            'ui-route#0.2.18', 'angular-resource#1.4.9',
            'angular-animate#1.4.9', 'oclazyload#1.0.9',
            'EaselJS#0.8.2', 'PreloadJS#0.6.2',
            'gsap#1.18.2', 'hammer.js#2.0.6'];
        var cb = this.async();
        
        this.prompt({
            type: "checkbox",
            name: 'bowerDependencies',
            message: 'What do you want?',
            choices: bowerDeps,
            default: []
        }, function (a) {
            bowerDependencies = a.bowerDependencies;
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
            this.spawnCommandSync('mkdir', ['logs', 'client', 'client', 'client/image', 'client/js',
                'client/map']);
        } else if ('c' === p) {
            this.fs.copy(path.join(__dirname, 'templates', 'client'), '.');
            this.spawnCommandSync('mkdir', ['image', 'js', 'map']);
        }
        this.spawnCommandSync('touch', ['README.md']);
        this.initNpmConfig();
        this.initBowerConfig();
        cb();
    },

    install: function () {

        var p = this.p;
        var npmDeps = ['express@4.13.3', 'body-parser@1.14.2', 'compression@1.6.1', 'request@2.69.0',
            'mongoose@4.4.4', 'node-uuid@1.4.7', 'moment@2.12.0', 'multer@1.1.0'];
        var npmDevDeps = ['bower@1.7.1', 'gulp@3.8.11',
            'gulp-babel@6.1.2', 'babel-preset-es2015@6.6.0',
            'gulp-concat@2.5.2', 'gulp-sourcemaps@1.5.0',
            'gulp-uglify@1.1.0', 'gulp-postcss@6.1.0',
            'autoprefixer@6.3.3', 'postcss-scss@0.1.6', 'postcss-pxtorem@3.3.1',
            'gulp-sass@2.2.0', 'browser-sync@2.8.2'];
        
        if (p && !('c' === p || 'f' === p)) {
            return;
        } else if (!p || 'f' === p) {
            this.npmInstall(npmDeps, {'save': true}, function () {
            });

            this.npmInstall(npmDevDeps, {'saveDev': true}, function () {
            });

            this.bowerInstall(bowerDependencies, {'save': true}, function () {
                this.spawnCommandSync('mv', ['-f', 'bower.json', 'bower_components', 'client']);
            }.bind(this));
        } else if ('c' === p) {
            this.npmInstall(npmDevDeps, {'saveDev': true}, function () {
            });

            this.bowerInstall(bowerDependencies, {'save': true}, function () {
                this.spawnCommandSync('mv', ['-f', 'bower.json', 'bower_components', 'client']);
            }.bind(this));
        }
    },

    done: function () {
        console.log('done.')
    }
});