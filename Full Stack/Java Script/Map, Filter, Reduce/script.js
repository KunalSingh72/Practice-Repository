// .map() = accepts a callback and applies that function to each element of an array then return a new array

// const numbers = [1,2,3,4,5];
// const sq = numbers.map(square);

// console.log(sq);

// function square(element){
//     return Math.pow(element, 2);
// } 
// ----------------------------------
// const students = ['Spongebob', 'Patrick', 'Squidward'];

// function upperCase(element){
//     return element.toUpperCase();
// }

// const sq = students.map(upperCase);

// console.log(sq);


// ----------------------------------

// const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }

// ==================================================


// .filter() = creates a new array by filtering out elements

// let numbers = [1,2,3,4,5,6,7];
// let evenNums = numbers.filter(isEven);

// console.log(evenNums); 


// function isEven(element){
//     return element % 2 === 0;

// }

// --------------------------------------
// const ages = [16,17,18, 18, 19, 20, 60];

// const adults = ages.filter(isAdult);

// console.log(adults);

// function isAdult(element){
//     return element >=18;
// }


// ==============================================

// .reduce() = reduce the elements of en array to a single value

// const prices = [5,30,10,25,15,20];

// const total = prices.reduce(sum);

// console.log(total);

// function sum(previous, next){
//     return previous + next;
// }

// ---------------------------------------------

// const grades =[75, 50, 90, 80, 65, 95];

// const maxx = grades.reduce(max);

// console.log(maxx);

// function max(previous, next){
//     return Math.max(previous,next);
// }