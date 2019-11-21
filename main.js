const sum = require("./src/sumAndFactorial").sum;
const factorial = require("./src/sumAndFactorial").factorial;

const main = function() {
  const a = 5;
  const b = 3;
  console.log("sum of " + a + " and " + b + " is " + sum(a, b));
  console.log("factorial of " + a + " is " + factorial(a));
};

main();
