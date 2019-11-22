const sum = function(a, b) {
  return a + b;
};

const factorial = function(a) {
  let fact = 1;
  for (let index = 1; index <= a; index++) {
    fact *= index;
  }
  return fact;
};

const isNumber = function(text) {
  return Number.isInteger(+text);
};

const validateArgs = function(args) {
  const usage = "usage: node main.js [sum|factorial] [0-9]* [0-9]*";
  const operation = args[0];
  const firstValue = +args[1];
  const secondValue = +args[2];
  const areValidNumbers = isNumber(firstValue) && isNumber(secondValue);
  if (operation == "sum" && areValidNumbers) {
    return sum(firstValue, secondValue);
  }
  if (operation == "factorial" && isNumber(firstValue)) {
    return factorial(firstValue);
  }
  return usage;
};

exports.sum = sum;
exports.factorial = factorial;
exports.isNumber = isNumber;
exports.validateArgs = validateArgs;
