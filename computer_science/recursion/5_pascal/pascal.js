const pascal = function (n) {
  if (n === 1) return [1];
  const prev = pascal(n - 1)
  const middle = []

  for (let i = 0; i < prev.length - 1; i++) {
    middle.push(prev[i] + prev[i + 1])
  }
  return [1, ...middle, 1]
};

// Do not edit below this line
module.exports = pascal;
