var generators = require('yeoman-generator');
var Base = generators.Base;
var path = require('path');
var npmDeps = [];


module.exports = Base.extend({

    initNpmConfig: function () {

    },

    constructor: function () {

        generators.Base.apply(this, arguments);
        this.argument('p', {type: String, required: true});
    },

    prompting: function () {

    },

    writing: function () {

        let upperName;
        if (this.p){
            upperName = this.p.toUpperCase();
        }

        this.fs.copyTpl(
            this.templatePath('template.module.js'),
            this.destinationPath(this.p + '.module.js'),
            {
                name: this.p,
                upperName:upperName
            }
        );
        this.fs.copyTpl(
            this.templatePath('template.type.js'),
            this.destinationPath(this.p + '.type.js'),
            {
                name: this.p,
                upperName:upperName
            }
        );
    },

    install: function () {

    },

    done: function () {
        console.log('done.')
    }
});