// Array = A variable like structure that can hold more than 1 value

let fruits = ['apple', 'orange', 'banana'];

fruits[2] = "coconut";

fruits.push("coconut"); //add last element
fruits.pop(); // remove last element
fruits.unshift("mango"); //first element
fruits.shift(); // replace first element

console.log(fruits[0]); 
console.log(fruits[2]); 

let numOfFruits = fruits.length; 

let index = fruits.indexOf("apple"); //0
// -1 means not found

for(let i = 0; i<fruits.length;i++ ){
    console.length(fruits[i]);
}

fruits.sort(); //sort ascending
fruits.sort().reverse(); //sort descending

for(let fruit of fruits ){
    console.length(fruit);
}


