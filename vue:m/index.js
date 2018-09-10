var Generator = require('yeoman-generator')
var path = require('path')
var npmDeps = []

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.p = args[0]
  }
  writing () {
    let upperName
    if (this.p) {
      upperName = this.p.toUpperCase()
    }

    this.fs.copyTpl(
      this.templatePath('template.module.js'),
      this.destinationPath(this.p + '.module.js'),
      {
        name: this.p,
        upperName: upperName
      }
    )
    this.fs.copyTpl(
      this.templatePath('template.type.js'),
      this.destinationPath(this.p + '.type.js'),
      {
        name: this.p,
        upperName: upperName
      }
    )
  }
}
