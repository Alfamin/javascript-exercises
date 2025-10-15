const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
const summ = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
},0);
return summ
}

const multiply = function(arr) {
let result = arr.reduce((total, current) => {
  return total * current
}, 1)
return result
}

const power = function(base, exponent) {
	return base ** exponent
};

const factorial = function(num) {
  let array = []
  for(let i = num ; i > 0; i--){

   array.push(i)

  }
  let resulttt = array.reduce((total, current) => {
  return total * current
}, 1)
return resulttt
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
