// Variable initialized for my age
let myAge = 28;
// Variable of two human years
let earlyYears = 2;
// 10.5 dog years each for the first 2 human years
earlyYears *= 10.5;
// 2 years already accounted for, there subtracted
let laterYears = myAge - 2;
// Dog years multiplied by 4 after the first 2 human years
laterYears *= 4;
// Checking work
console.log(`Early years are ${earlyYears}`);
console.log(`Later years are ${laterYears}`);
// Total converted years from my age to dog years
let myAgeInDogYears = earlyYears + laterYears;
// Retursn a string with all lowercase letters
let myName = "David Agustin".toLowerCase();

console.log(`My name is ${myName}. I am ${laterYears} old in dog years.`);