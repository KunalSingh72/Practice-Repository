// Closure = A function defined inside of another function
// The inner function has access to the variables and scope of the outer function
// Allow for private variables and state maintenance
// Used frequently in JS frameworks : React, Vue, Angular

// function outer(){
//     const msg = "Hello";

//     function inner(){

//         console.log(msg); 
//     }

//     inner();
// }

// // inner();

// outer();

// --------------------------

// For making private variable

// function createCounter(){
//     let count = 0; //private

//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }

//     function getCount(){
//         return count;
//     }

//     return {increment, getCount};
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(counter.getCount());

// -----------------------

function createGame(){

    let score = 0;

    function increaseScore(points){
        score+=points;
        console.log(`+${points} pts`);
    }
    function decreaseScore(points){
        score-= points;
        console.log(`-${points} pts`);
    }
    
    function getScore(){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(6);
game.decreaseScore(5);

console.log(`The final Score is ${game.getScore()}`);
