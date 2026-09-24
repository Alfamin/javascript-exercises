function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      result.push(0);
    } else if (i === 1) {
      result.push(1);
    } else {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
}

function fibsRec(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const prev = fibsRec(n - 1);
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
  return prev;
}

module.exports = { fibs, fibsRec };
