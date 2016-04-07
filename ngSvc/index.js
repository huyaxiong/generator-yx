var generators = require('yeoman-generator');


module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('template.svc.js'),
            this.destinationPath(this.p + '.svc.js'),
            {
                name: this.p
            }
        );
    }
});