// Method Chaining  = Calling one method after another in one continuous line of code.

// -- No Method Chaining --

let userName = window.prompt("Enter your userName: ");

userName = userName.trim();

let letter = userName.charAt(0);

letter = letter.toUpperCase();

let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();

userName = letter + extraChar;

console.log(userName);

// -- Method Chaining ---

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLocaleLowerCase();

console.log(userName);