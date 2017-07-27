var Generator = require('yeoman-generator');

module.exports = class extends Generator {

  // note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });

    // And you can then access it later; e.g.
    this.log(this.options.appname);

    this.option('ts');

    this.scriptSuffix = (this.options.ts ? '.ts' : '.js');
  }

  method1() {
    this.log('method 1 just ran');
  }

  method2() {
    this.log('method 2 just ran');
  }

  _privateMethod() {
    console.log('private hey');
  }

  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }, {
        type: 'confirm',
        name: 'addFeature',
        message: 'Would you like add some features'
      }
    ]).then((answer) => {
      this.log('app name: ', answer.name);
      this.log('add feature: ', answer.addFeature);
    });
  }
};
