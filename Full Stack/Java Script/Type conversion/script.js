// Type Comversion = Change the datatype of a value to another
//                   (Strings, numbers, booleans)


let age = window.prompt("How old are you?"); //string input

age = Number(age); //convert to number
age+=1;

console.log(age, typeof age);

let x = 'Pizza';
let y = 'Pizza';
let z = 'Pizza';

x = Number(x); // NaN
y = String(y); // string
z = Boolean(z); // true 
