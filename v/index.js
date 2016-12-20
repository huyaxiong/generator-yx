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

        this.fs.copyTpl(
            this.templatePath('template.vue'),
            this.destinationPath(this.p + '.vue')
            // {
            //     name: this.p
            // }
        );
    },

    install: function () {

    },

    done: function () {
        console.log('done.')
    }
});