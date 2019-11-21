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

exports.sum = sum;
exports.factorial = factorial;
