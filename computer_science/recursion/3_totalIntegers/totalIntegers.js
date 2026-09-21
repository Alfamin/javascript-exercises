const totalIntegers = function(array) {
    let count = 0
    array.forEach(el => {
        if(Number.isInteger(el)){
            count++
        }
    });
    return count
};

// Do not edit below this line
module.exports = totalIntegers;
