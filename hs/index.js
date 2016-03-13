var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    writing: function () {

        this.fs.copyTpl(
            this.templatePath('template.html'),
            this.destinationPath(path.join('htmls', this.p + '.html')),
            {name: this.p}
        );
        this.fs.copy(
            this.templatePath('template.scss'),
            path.join('scss', this.p + '.scss')
        );
    }
});