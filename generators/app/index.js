'use strict';
const venus = require('venus-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = venus.Base.extend({
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the neat ' + chalk.red('generator-venus') + ' generator!'
    ));

    return this.venusPrompting();
  },

  composing() {
    this.composeWith(require.resolve(`generator-venus-${this.props.framework}-${this.props.project}/generators/app`), {
      framework: this.props.framework,
      project: this.props.project,
      js: this.props.js,
      css: this.props.css
    });
  }
});
