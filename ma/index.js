var generators = require('yeoman-generator');


module.exports = generators.Base.extend({

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    writing: function () {

        this.fs.copy(
            this.templatePath('template.js'),
            this.p + '.js'
        );
        this.fs.copy(
            this.templatePath('template.wxml'),
            this.p + '.wxml'
        );
        this.fs.copy(
            this.templatePath('template.wxss'),
            this.p + '.wxss'
        );
    }
});