function contains(obj, target) {
  for (const value of Object.values(obj)) {
    if (Object.is(value, target)) {
      return true;
    }

    if (value === null) {
      continue;
    }

    if (typeof value === 'object') {
      if (contains(value, target)) {
        return true;
      }
    }
  }

  return false;
}

// Do not edit below this line
module.exports = contains;
