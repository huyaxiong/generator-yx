var Generator = require('yeoman-generator');
var path = require('path');
var npmDeps = [
    "axios@latest",
    "jest@^23.4.2"];
var npmDevDeps = [
    "autoprefixer@^6.5.3",
    "babel-core@^6.26.0",
    "babel-loader@^7.1.5",
    "babel-preset-env@^1.7.0",
    "babel-plugin-transform-es2015-modules-commonjs@^6.26.2",
    "babel-plugin-syntax-dynamic-import@^6.18.0",
    "babel-plugin-root-import@^6.1.0",
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


module.exports = class extends Generator {

    constructor(args, opts) {

        super(args, opts);
    }

    writing() {

        this.fs.copy(path.join(__dirname, 'templates'), '.', {dot: true});
        this.spawnCommandSync('mkdir', ['logs', 'dist', 'fonts']);

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
    }

    install() {

        this.npmInstall(npmDeps, {'save': true});
        this.npmInstall(npmDevDeps, {'saveDev': true});
    }
};