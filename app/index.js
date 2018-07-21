var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = [
    "axios@latest"];
var npmDevDeps = [
    "autoprefixer@^6.5.3",
    "babel-core@^6.26.0",
    "babel-loader@^7.1.5",
    "babel-preset-es2015@^6.6.0",
    "babel-plugin-transform-runtime@^6.15.0",
    "babel-plugin-transform-object-rest-spread@^6.26.0",
    "resolve-url-loader@^2.3.0",
    "css-loader@^0.26.1",
    "file-loader@^1.1.11",
    "url-loader@^0.5.9",
    "html-webpack-plugin@^3.2.0",
    "node-sass@^4.9.0",
    "postcss@^6.0.23",
    "postcss-loader@^2.1.5",
    "postcss-pxtorem@^3.3.1",
    "sass-loader@^7.0.3",
    "style-loader@^0.13.1",
    "webpack@^4.12.2",
    "webpack-dev-server@^3.1.4",
    "webpack-bundle-analyzer@^2.13.1",
    "webpack-bundle-analyzer@^2.13.1",
    "webpack-cli@^3.0.8",
    "clean-webpack-plugin@^0.1.19",
    "cross-env@5.0.5"];


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
                "start": "node ./server/main.js --debug"
            },
            "author": "Hugh",
            "license": "ISC",
            "dependencies": {},
            "devDependencies": {},
        };
        this.fs.writeJSON('package.json', config);
    },

    constructor: function () {

        Base.apply(this, arguments);
        // this.argument('p', {userType: String, required: false});
    },

    prompting: function () {

        var cb = this.async();
        cb();
        // var frontendDeps = ['normalize.css@^5.0.0', 'jquery@2.2.3', 'susy@2.2.12'];
        //
        // this.prompt({
        //     type: "checkbox",
        //     name: 'frontendDeps',
        //     message: 'What do you need?',
        //     choices: frontendDeps,
        //     default: []
        // }, function (a) {
        //     npmDeps = npmDeps.concat(a.frontendDeps);
        //     cb();
        // }.bind(this));
    },

    writing: function () {

        var cb = this.async();
        // var p = this.p;
        this.fs.copy(path.join(__dirname, 'templates'), '.', {dot:true});
        this.spawnCommandSync('mkdir', ['logs', 'dist', 'fonts']);
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