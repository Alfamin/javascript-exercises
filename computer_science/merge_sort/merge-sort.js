function split(arr) {
  const arrMidpoint = Math.round(arr.length / 2);
  const arrSliceLeft = arr.slice(0, arrMidpoint);
  const arrSliceRight = arr.slice(arrMidpoint);

  return {
    arrSliceLeft,
    arrSliceRight,
  };
}

function merge(left, right) {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else if (left[0] >= right[0]) {
      result.push(right.shift());
    }
  }
  if (left.length == 0) {
    result.push(...right);
  } else if (right.length == 0) {
    result.push(...left);
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let splited = split(arr);

  const sortedLeft = mergeSort(splited.arrSliceLeft);
  const sortedRight = mergeSort(splited.arrSliceRight);

  return merge(sortedLeft, sortedRight);
}

console.log(mergeSort([5, 3, 8, 1, 9, 2]));


module.exports = { split, merge };
