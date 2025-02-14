// Callbacks = a function that is passed as an arguement to another fuction

// Used ti handle asynchronous operations:
// 1. reading a file
// 2. Network requests
// 3. Interacting with databases


// function hello(callback){
//     console.log("Hello!");
//     callback(goodBye);

// }

// function leave(){
//     console.log("leave!");
// }

// function wait(cc){
//     console.log("Wait!");

//     cc();
// }


// function goodBye(){
//     console.log("goodBye!");
// }


// hello(wait);

sum(displayPage, 2, 3)


function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}