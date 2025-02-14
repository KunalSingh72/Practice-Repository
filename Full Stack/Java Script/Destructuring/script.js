// Destructuring = extract values from array and objects, then assign to cariable in a convenient way
// [] = to perform array destructuring
// {} = to perform object destructuring

//  ----- Example 1 ------
// Swap the value of two variable

// let a = 1;
// let b = 2;

// [a,b] =[b, a];

// console.log(a);
// console.log(b);

// ------------------
// Ex 2 Elements in an array

// const colors = ['red', 'green', 'blue', 'black', 'white'];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// -----------------------------------
// Ex 3 Assign array elements to variable

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// -------------------------
// Ex 4 : Extract values from objects
// const person1 = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age:30,
//     job:"Fry Cook"
// }


// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age:34,
// }

// const {firstName, lastName, age, job="Unemployeed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// ---------------------------------------
// Ex 5 Destructuring in function parameters

function displayPerson({firstName, lastName, age, job="Unemployeed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`Job : ${job}`);
    
}

const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age:30,
    job:"Fry Cook"
}


const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age:34,
}

displayPerson(person1);