var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = [];
var npmDevDeps = ['gulp@3.8.11', 'gulp-babel@6.1.2', 'gulp-uglify@1.1.0',
    'gulp-concat@2.5.2', 'gulp-sourcemaps@1.5.0',
    'gulp-postcss@6.1.0', 'gulp-sass@2.2.0', 'gulp-fontmin@0.7.4',
    'gulp-imagemin@3.0.2', 'babel-preset-es2015@6.6.0',
    'autoprefixer@6.3.3', 'postcss-scss@0.1.6', 'postcss-pxtorem@3.3.1',
    'browser-sync@2.8.2'];


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

        var frontendDeps = ["core-js@2.4.1", 'jquery@2.2.3', 'foundation-sites@6.2.3', 'susy@2.2.12',
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
        // var p = this.p;
        this.fs.copy(path.join(__dirname, 'templates'), '.');
        this.spawnCommandSync('mkdir', ['log', 'js']);
        this.spawnCommandSync('touch', ['README.md', '.gitignore']);
        this.initNpmConfig();
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