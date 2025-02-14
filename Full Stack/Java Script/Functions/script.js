// Function = A section of reusable code. 
// Declare code once, use it whenever you want.
// Call the funct to execute that code.

function happyBirthday(userName, age){
    console.log("Happy birthday to you")
    console.log(`Happy birthday ${userName}. You are ${age} years old.`)
}


happyBirthday("Bro Code", 30);

// --------------------------

function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}

function isEven(number){
    return number % 2 === 0 ? true : false;
}

function isEven(number){
    return isEmail.include("@") ? true : false;
}

console.log(add(2,3), subtract(5, 4));

console.log(isEven(10));

console.log(isEmail("BroCode@gamil.com"));
