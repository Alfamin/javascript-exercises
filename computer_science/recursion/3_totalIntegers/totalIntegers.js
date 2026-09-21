const totalIntegers = function (array) {
  let count = 0;

  if (Array.isArray(array)) {
    array.forEach((el) => {
      if (Number.isInteger(el)) {
        count++;
      }
      if (Array.isArray(el) || typeof el === 'object') {
        count += totalIntegers(el);
      }
    });
  } else {
    let objlist = Object.values(array);
    count += totalIntegers(objlist);
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
