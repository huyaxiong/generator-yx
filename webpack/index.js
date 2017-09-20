var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDevDeps = ["autoprefixer@^6.5.3",
    "babel-loader@^6.2.8",
    "babel-preset-es2015@^6.6.0",
    "babel-plugin-transform-runtime@^6.15.0",
    "css-loader@^0.26.1",
    "file-loader@^0.9.0",
    "url-loader@^0.5.7",
    "html-webpack-plugin@^2.24.1",
    "node-sass@^3.13.0",
    "postcss-loader@^1.2.0",
    "postcss-pxtorem@^3.3.1",
    "sass-loader@^4.0.2",
    "style-loader@^0.13.1",
    "webpack@^2.1.0-beta.25",
    "webpack-dev-server@^2.1.0-beta.12",
    "cross-env@5.0.5"];


module.exports = Base.extend({

    writing: function () {

        var cb = this.async();
        this.fs.copy(path.join(__dirname, 'templates'), '.');
        cb();
    },

    install: function () {

        this.npmInstall(npmDevDeps, {'saveDev': true});
    },

    done: function () {
        console.log('done.')
    }
});