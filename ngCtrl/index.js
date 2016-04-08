var generators = require('yeoman-generator');
var _ = require('lodash');


module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('template.ctrl.js'),
            this.destinationPath(this.p + '.ctrl.js'),
            {
                name: this.p,
                capitalizedName: _.capitalize(this.p)
            }
        );
    }
});