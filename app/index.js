var Generator = require('yeoman-generator')
var path = require('path')
var npmDeps = [
  'axios@latest',
  'jest@^23.4.2']
var npmDevDeps = [
  'autoprefixer@^6.7.7',
  '@babel/core@^7.0.0',
  '@babel/plugin-proposal-object-rest-spread@^7.0.0',
  '@babel/plugin-syntax-dynamic-import@^7.0.0',
  '@babel/plugin-transform-modules-commonjs@^7.0.0',
  '@babel/plugin-transform-runtime@^7.0.0',
  '@babel/preset-env@^7.0.0',
  '@babel/runtime-corejs2@^7.0.0',
  'babel-loader@^8.0.0',
  'babel-plugin-import@^1.8.0',
  'babel-plugin-root-import@^6.1.0',
  'resolve-url-loader@^2.3.0',
  'css-loader@^0.26.1',
  'file-loader@^1.1.11',
  'url-loader@^0.5.9',
  'html-webpack-plugin@^3.2.0',
  'node-sass@^4.9.0',
  'postcss@^6.0.23',
  'postcss-loader@^2.1.5',
  'postcss-px2viewport@^0.1.3',
  'sass-loader@^7.0.3',
  'style-loader@^0.13.1',
  'webpack@^4.12.2',
  'webpack-dev-server@^3.1.4',
  'copy-webpack-plugin@^5.0.4',
  'webpack-bundle-analyzer@^2.13.1',
  'webpack-cli@^3.0.8',
  'clean-webpack-plugin@^0.1.19',
  'cross-env@5.0.5',
  'eslint@^5.5.0',
  'eslint-config-standard@^12.0.0',
  'eslint-plugin-import@^2.14.0',
  'eslint-plugin-node@^7.0.1',
  'eslint-plugin-promise@^4.0.1',
  'eslint-plugin-jest@^21.22.0',
  'eslint-plugin-standard@^4.0.0',
  'husky@^1.1.2'
]

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  writing () {
    this.spawnCommandSync('mkdir', ['logs', 'dist', 'fonts'])
    this.fs.copyTpl(path.join(__dirname, 'templates'), '.', {}, {}, { 'globOptions': { 'dot': true } })
    var config = {
      'name': this.appname,
      'version': '1.0.0',
      'description': '',
      'main': 'server/main.js',
      'scripts': {
        'lint': './node_modules/.bin/eslint src/**/*.vue src/**/*.js --fix && ./node_modules/.bin/stylelint src/**/*.scss --fix',
        'watch': "cross-env NODE_ENV=dev ./node_modules/.bin/webpack-dev-server -w --open-page './index.html'",
        'build:test': 'cross-env NODE_ENV=test ./node_modules/.bin/webpack --progress',
        'build:prod': 'cross-env NODE_ENV=prod ./node_modules/.bin/webpack --progress',
        'start': 'node ./server/main.js --debug'
      },
      'author': 'Hugh',
      'license': 'ISC',
      'dependencies': {},
      'devDependencies': {}
    }
    this.fs.writeJSON('package.json', config)
  }

  install () {
    this.yarnInstall(npmDeps)
    this.yarnInstall(npmDevDeps, { 'dev': true })
  }
}
