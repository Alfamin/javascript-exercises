const permutations = function (arr) {
  if (arr.length == 0) {
    return [[]];
  }
  const results = [];
  arr.forEach((el, i) => {
    const rest = arr.filter((_, index) => index !== i);
    const orderings = permutations(rest);
    orderings.forEach((ordering) => {
      results.push([el, ...ordering]);
    });
  });
  return results
};

// Do not edit below this line
module.exports = permutations;
