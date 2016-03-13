var generators = require('yeoman-generator');
var _ = require('lodash');
var path = require('path');

module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('template.drt.js'),
            this.destinationPath(this.p + '.drt.js'),
            {
                name: this.p
            }
        );
        this.fs.copy(
            this.templatePath('template.drt.html'),
            this.p + '.drt.html'
        );
    }
});