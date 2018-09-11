var Generator = require('yeoman-generator')
var path = require('path')
var npmDeps = [
  'fastclick@latest',
  'vue@latest',
  'vue-router@latest',
  'vuex@latest']
var npmDevDeps = [
  'vue-loader@latest',
  'vue-template-compiler@latest',
  'eslint-plugin-vue@^4.7.1'
]

module.exports = class extends Generator {
  writing () {
    var cb = this.async()
    this.fs.copy(path.join(__dirname, 'templates'), '.')
    cb()
  }

  install () {
    this.yarnInstall(npmDeps)
    this.yarnInstall(npmDevDeps, { 'dev': true })
  }
}
