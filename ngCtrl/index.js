var generators = require('yeoman-generator');


module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('template.ctrl.js'),
            this.destinationPath(path.join(this.p, this.p + '.ctrl.js')),
            {
                name: this.p,
                capitalizedName: _.capitalize(this.p)
            }
        );
    }
});