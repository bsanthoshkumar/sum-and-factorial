const validateArgs = require("./src/sumAndFactorial").validateArgs;
const chalk = require("chalk");

const main = function(args) {
  console.log(chalk.greenBright(validateArgs(args.slice(2))));
};

main(process.argv);
