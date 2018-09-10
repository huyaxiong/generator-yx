var Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.p = args[0]
  }

  writing () {
    this.fs.copy(
      this.templatePath('template.js'),
      this.p + '.js'
    )
    this.fs.copy(
      this.templatePath('template.wxml'),
      this.p + '.wxml'
    )
    this.fs.copy(
      this.templatePath('template.wxss'),
      this.p + '.wxss'
    )
    this.fs.copy(
      this.templatePath('template.json'),
      this.p + '.json'
    )
  }
}
