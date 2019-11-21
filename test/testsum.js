const sum = require("../src/sumAndFactorial").sum;
const factorial = require("../src/sumAndFactorial").factorial;
const assert = require("assert");

describe("sum", function() {
  it("should return sum of positive integers", function() {
    assert.strictEqual(sum(3, 5), 8);
  });
  it("should return sum of negative integers", function() {
    assert.strictEqual(sum(-3, -5), -8);
  });
});

describe("factorial", function() {
  it("should return factorial of given number", function() {
    assert.strictEqual(factorial(5), 120);
  });
});
