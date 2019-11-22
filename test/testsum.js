const sum = require("../src/sumAndFactorial").sum;
const factorial = require("../src/sumAndFactorial").factorial;
const isNumber = require("../src/sumAndFactorial").isNumber;
const validateArgs = require("../src/sumAndFactorial").validateArgs;
const assert = require("assert");
const chalk = require("chalk");

describe("sum", function() {
  it(chalk.redBright("should return sum of positive integers"), function() {
    assert.strictEqual(sum(3, 5), 8);
  });
  it(chalk.redBright("should return sum of negative integers"), function() {
    assert.strictEqual(sum(-3, -5), -8);
  });
});

describe("factorial", function() {
  it(chalk.greenBright("should return factorial of given number"), function() {
    assert.strictEqual(factorial(5), 120);
  });
});

describe("validateArgs", function() {
  it(
    chalk.yellowBright("should perform sum operation on given values"),
    function() {
      assert.strictEqual(validateArgs(["sum", "8", "17"]), 25);
    }
  );

  it(
    chalk.yellowBright("should perform factorial operation on given values"),
    function() {
      assert.strictEqual(validateArgs(["factorial", "6"]), 720);
    }
  );

  it(
    chalk.yellowBright("should return usage for invalid arguments"),
    function() {
      const usage = "usage: node main.js [sum|factorial] [0-9]* [0-9]*";
      assert.strictEqual(validateArgs(["sum", "5"]), usage);
    }
  );
});
