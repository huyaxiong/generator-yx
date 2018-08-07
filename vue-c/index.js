var Generator = require('yeoman-generator');
var path = require('path');
var npmDeps = [];


module.exports = class extends Generator {

    constructor(args, opts) {

        super(args, opts);
        this.p = args[0];
    }

    writing() {

        this.fs.copyTpl(
            this.templatePath('template.vue'),
            this.destinationPath(this.p + '.vue'),
            {
                name: this.p
            }
        );

        this.fs.copyTpl(
            this.templatePath('template.scss'),
            this.destinationPath(this.p + '.scss'),
            {
                name: this.p
            }
        );
    }
};