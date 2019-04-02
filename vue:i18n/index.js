var Generator = require('yeoman-generator')
var path = require('path')
var npmDeps = ['vue-i18n@8.8.2']

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
    this.p = args[0]
  }

  writing () {
    this.fs.copyTpl(path.join(__dirname, 'templates'), './src', {}, {})
  }

  install () {
    this.yarnInstall(npmDeps)
  }
}
