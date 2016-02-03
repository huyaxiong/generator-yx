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
            this.templatePath('template.mod.js'),
            this.destinationPath(path.join(this.p, this.p + '.mod.js')),
            {
                name: this.p
            }
        );
        this.fs.copyTpl(
            this.templatePath('template.ctrl.js'),
            this.destinationPath(path.join(this.p, this.p + '.ctrl.js')),
            {
                name: this.p,
                capitalizedName: _.capitalize(this.p)
            }
        );
        this.fs.copyTpl(
            this.templatePath('template.svc.js'),
            this.destinationPath(path.join(this.p, this.p + '.svc.js')),
            {
                name: this.p
            }
        );
    }
});