const findTheOldest = function(people) {
 let currentDate = new Date()
 let currentYear = currentDate.getFullYear()
 

people.sort((a, b) => {
const ageA = a.yearOfDeath ? a.yearOfDeath - a.yearOfBirth : currentYear - a.yearOfBirth
const ageB = b.yearOfDeath ? b.yearOfDeath - b.yearOfBirth : currentYear - b.yearOfBirth
return ageA - ageB
})
return people[people.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
