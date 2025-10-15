const sumAll = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR'
  if (num1 < 0 || num2 < 0) return 'ERROR'
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR'
let smallerNum = ''
let biggerNum = ''
if (num1 > num2){
  smallerNum = num2
  biggerNum = num1} else {
  smallerNum = num1
  biggerNum = num2
  }
  let sum = 0
for(let i = smallerNum; i <= biggerNum; i++){
  sum += i

}
return sum
};

// Do not edit below this line
module.exports = sumAll;


//