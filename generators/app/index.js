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
  }
});
