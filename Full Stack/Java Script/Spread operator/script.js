// Spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements
// (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];

let maximum = Magth.max(...numbers); // array cannot be placed directly to find max and min 
let minimum = Math.min(...numbers);

console.log(maximum);


let userName = "Bro Code";
let letters = [...userName].join("-"); //B-r-o-C-o-d-e

let fruits = ['apple', 'orange', 'banana'];
let veges = ['carrots', 'celery', 'potatoes'];

let foods = [...fruits, ...veges, "eggs", "milk"];

console.log(foods);

// Rest parameters = (...rest) allows a function work with a variable number of arguements by bundeling them into an array

function opernFridge(...foods){
    console.log(foods); //array
}

function foodArray(...foods){
    return foods; //return array
}
const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

opernFridge(food1, food2, food3, food4);

console.log(foodArray(food1, food2, food3, food4));



function sum(...numbers){
    let result = 0;
    for (let number of numbers){
        result +=number;
    }
    return result;
}
const total = sum(1,2,3);

console.log(`Your total is $${total}`);



// -------------------------

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebbob","Squarepants", "III")