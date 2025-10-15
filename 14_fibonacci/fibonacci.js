const fibonacci = function(count) {
let fib = [1,1]
if (count === 0 || count ===  "0"){return 0}
else if(count < 0){return 'OOPS'}
else{
if(typeof count === 'string'){
  count = Number(count)
}

for (let i = 2; i < count; i++){
  calcFib = (fib[fib.length -1] + fib[fib.length -2])
  fib.push(calcFib)

}
return fib[fib.length - 1]
};}

// Do not edit below this line
module.exports = fibonacci;
