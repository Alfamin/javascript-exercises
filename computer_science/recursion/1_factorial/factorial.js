const factorial = function (n) {
  if (n < 0 || !Number.isInteger(n)) return
     if (n === 1) return 1;
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = factorial;

/*


fact(1) =  1
fact(2) = 2 + fact(1)
fact(3) = 3 + fact(2)
fact(4) = 4 + fact(3)

fact(n) = n * fact(n - 1)
*/
