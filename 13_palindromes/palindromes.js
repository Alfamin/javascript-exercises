const palindromes = function (string) {
let original = string.toLowerCase()
let puncRemoved = original.replace(/[^a-zA-Z0-9]/g, '')
let arr = puncRemoved.split('')
let reversedArray = arr.reverse()
let reversedString = reversedArray.join('')

if (reversedString === puncRemoved){
  return true
} else {return false}
};
// Do not edit below this line
module.exports = palindromes;
