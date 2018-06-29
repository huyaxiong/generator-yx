var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDevDeps = ["autoprefixer@^6.5.3",
    "babel-core@^6.26.0",
    "babel-loader@^6.2.8",
    "babel-preset-es2015@^6.6.0",
    "babel-plugin-transform-runtime@^6.15.0",
    "babel-plugin-transform-object-rest-spread@^6.26.0",
    "resolve-url-loader@^2.3.0",
    "css-loader@^0.26.1",
    "file-loader@^0.9.0",
    "url-loader@^0.5.9",
    "html-webpack-plugin@^3",
    "node-sass@^4.9.0",
    "postcss@^6.0.23",
    "postcss-loader@^2.1.5",
    "postcss-pxtorem@^3.3.1",
    "sass-loader@^7.0.3",
    "vue-loader@^15.2.4",
    "style-loader@^0.13.1",
    "webpack@^4.12.2",
    "webpack-dev-server@^3.1.4",
    "webpack-bundle-analyzer@^2.13.1",
    "clean-webpack-plugin@^0.1.19",
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